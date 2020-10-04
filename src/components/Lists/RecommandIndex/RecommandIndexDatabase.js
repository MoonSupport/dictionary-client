import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import RecommandIndexForm from "./RecommandIndexForm"
import { sampleSize } from "lodash"

export default function RecommandIndexView() {
  useEffect(() => {}, [])

  const {
    allMarkdownRemark: { nodes: databases },
  } = useStaticQuery(graphql`
    query DatabaseRecommandWords {
      allMarkdownRemark(filter: { frontmatter: { label: { in: "Database" } } }) {
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
    engTitle={'Database'}
    korTitle={'데이터베이스'}
      words={sampleSize(databases, 4)}
    />
  )
}
