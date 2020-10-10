import React, {useState, useEffect, useMemo} from "react"
import { chunk, random} from 'lodash'
// import { makeStyles } from "@material-ui/core"
import { useStaticQuery } from 'gatsby'
// const useStyles = makeStyles({

// })


const Question = () => {
// const classes = useStyles()
const [chooses, setChooses] = useState([])
const [page, setPage] = useState(0)

const {
    allMarkdownRemark: { nodes: samples },
  } = useStaticQuery(graphql`
    query samples {
      allMarkdownRemark(filter: {frontmatter: {}}, limit: 50) {
        nodes {
          frontmatter {
            title
            label
            slug
          }
          html
        }
      }
    }
`)


const questionss = chunk(samples, 5)


const [questionMap, answers] = useMemo(()=> {
  console.log('meemo')
  const questionMap = []
  const answers = []
  questionss.map((questions, index)=> {
    const answer = random(0,4)
    const question = questions[answer].html
    const [front, back] = trimWordFromBraket(questions[answer].frontmatter.title)
    const frontRegex = new RegExp(front,'gi')
    let formattedQuestion = question.replaceAll(frontRegex, '[ㅁㅁㅁ]').replaceAll(questions[answer].frontmatter.mean, '[ㅁㅁㅁ]')
    if(back) {
      const backRegex = new RegExp(back,'gi')
      formattedQuestion.replaceAll(backRegex, '[ㅁㅁㅁ]')
    }
    questionMap.push(formattedQuestion)
    answers.push(answer)
  })
  return [questionMap, answers]
}, [])

function trimWordFromBraket(title) {
  
  if(!title) {
    return
  }
  let front =title
  let back = ''
  if(typeof title === 'string') {
    if(title.includes('(')) {
        front = title.split('(')[0]
        back = title.split('(')[1].replace(')', '')
    }
  }
  return [front,back]
}

const handleOnClick = (e) => {
  const answer = e.target?.innerHTML?.split('.')[0]
  if(!answer) return

  setChooses((chooses=> {
    chooses[page] = answer
    return [...chooses]
  }))
}


return    (
    <>
    <div>Qustion</div>
    <div>
      <Problem problem={questionMap[page]} />
      <Viewer questions={questionss[page]} handleOnClick={handleOnClick} />
      {chooses[page]}
    </div>
 
    </>
)

}

const Problem = ({problem}) => {
  return <div dangerouslySetInnerHTML={{ __html: problem }}/>
}

const Viewer = ({questions, handleOnClick}) => {
  return (<>
  {questions.map((question, index)=> {
    return (
        <>
          <div onClick={handleOnClick}>
              {index}. 
              {' '+question.frontmatter.title}
          </div>
        </>
    )
})}
</>)
}

export default Question


