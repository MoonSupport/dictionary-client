import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { sampleSize } from "lodash"
import RecommandIndexForm from "./RecommandIndexForm"

export default function RecommandIndexView() {
  const {
    allMarkdownRemark: { nodes: frontends },
  } = useStaticQuery(graphql`
    query FrontendRecommandWords {
      allMarkdownRemark(
        filter: { frontmatter: { label: { in: "Frontend" } } }
      ) {
        nodes {
          frontmatter {
            title
            label
            slug
          }
        }
      }
    }
  `)

  return (
    <RecommandIndexForm
      engTitle={"Frontend"}
      korTitle={"프론트엔드"}
      words={sampleSize(frontends, 4)}
    />
  )
}
