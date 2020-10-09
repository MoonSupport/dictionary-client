import React, {useState} from "react"
import { chunk, random} from 'lodash'
// import { makeStyles } from "@material-ui/core"
import { useStaticQuery } from 'gatsby'
// const useStyles = makeStyles({

// })


const Question = () => {
// const classes = useStyles()
// const chooses = useState([])
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



return    (
    <>
    <div>Qustion</div>
    <div>
      <div dangerouslySetInnerHTML={{ __html: questionMap[page] }}/>
    </div>
    {questionss[page].map((question, index)=> {
            return (
                <>
                  <div>
                      {index}. 
                      {' '+question.frontmatter.title}
                  </div>
                </>
            )
    })}
    </>
)

}

export default Question


