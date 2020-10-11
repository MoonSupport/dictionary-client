import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RecommandIndexForm from "./RecommandIndexForm"
import { sampleSize } from "lodash"

export default function RecommandIndexView() {
  const {
    allMarkdownRemark: { nodes: commons },
  } = useStaticQuery(graphql`
    query CommonRecommandWords {
      allMarkdownRemark(filter: { frontmatter: { label: { in: "Common" } } }) {
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
      engTitle={"Common"}
      korTitle={"공통 일반"}
      words={sampleSize(commons, 4)}
    />
  )
}
