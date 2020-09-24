import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { sampleSize } from "lodash"
import RecommandIndexForm from "./RecommandIndexForm"

export default function RecommandIndexView() {
  const {
    allMarkdownRemark: { nodes: devopes },
  } = useStaticQuery(graphql`
    query DevopsRecommandWords {
      allMarkdownRemark(filter: { frontmatter: { label: { in: "Devops" } } }) {
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
    engTitle={'Devops'}
    korTitle={'데브옵스'}
    words={sampleSize(devopes, 4)}  />
  )
}
