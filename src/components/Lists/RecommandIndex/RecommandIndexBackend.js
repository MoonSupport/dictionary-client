import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import RecommandIndexForm from "./RecommandIndexForm"
import { sampleSize } from "lodash"

export default function RecommandIndexView() {
  useEffect(() => {}, [])

  const {
    allMarkdownRemark: { nodes: backends },
  } = useStaticQuery(graphql`
    query BackendRecommandWords {
      allMarkdownRemark(filter: { frontmatter: { label: { in: "Backend" } } }) {
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
    engTitle={'Backend'}
    korTitle={'백엔드'}
      words={sampleSize(backends, 4)}
    />
  )
}
