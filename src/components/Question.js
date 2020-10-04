import React, {useState} from "react"
import { chunk, random} from 'lodash'
import { makeStyles } from "@material-ui/core"
import { useStaticQuery } from 'gatsby'
const useStyles = makeStyles({

})


const Question = () => {
const classes = useStyles()
const chooses = useState([])
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

questionss.map((question, index)=> {
    const answer = random(0,4)
    questionMap.push(answer)
    answers.push(answer)
})

return    (
    <>
    <div>Qustion</div>
    {questionss[page].map((question, index)=> {
            return (
                <>
                <div>
                    {index}. 
                    {' '+question.frontmatter.title}
                </div>
                <div>
                    {questionMap[page] === index &&
                     <div
                        dangerouslySetInnerHTML={{ __html: question.html }}
                    />}
                </div>
                </>
            )
    })}
    </>
)

}

export default Question


