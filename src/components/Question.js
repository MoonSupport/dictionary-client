import React, {useState, useEffect, useMemo} from "react"
import { chunk, random} from 'lodash'
import { makeStyles } from "@material-ui/core"
import { useStaticQuery } from 'gatsby'
const useStyles = makeStyles({
  selected : (e) => {
    console.log(e)
    return 'black'
  }
})


const Question = () => {
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
      <Viewer chooses={chooses[page]} questions={questionss[page]} handleOnClick={handleOnClick} />
      <NavigationButton setPage={setPage} />
    </div>
 
    </>
)

}

const NavigationButton = ({setPage}) => {
  const handlePreviousClick = () => {
    setPage((page)=>{
      if(page<=0) {
        alert('첫 페이지 입니다.')
        return
      }
      return --page
    })
  }

  const handleNextClick = () => {
    setPage((page)=>{
      if(page>=9) {
        alert('마지막 페이지입니다.')
        return
      }
      return ++page
    })
  }
  return <>
    <div onClick={handlePreviousClick}>previous</div>
    <div onClick={handleNextClick}>next</div>
  </>
}

const Problem = ({problem}) => {
  return <div dangerouslySetInnerHTML={{ __html: problem }}/>
}

const Viewer = ({questions, handleOnClick, chooses}) => {
  const classes = useStyles()
  return (<>
  {questions.map((question, index)=> {
    return (
        <>
          <div style={(chooses == index ) ? {color: 'green'} : {color : 'black'}} onClick={handleOnClick} className={classes.selected}>
              {index}.
              {' '+question.frontmatter.title}
          </div>
        </>
    )
})}
</>)
}

export default Question


