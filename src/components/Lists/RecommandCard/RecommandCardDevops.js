import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { sampleSize } from "lodash"
import RecommandCardForm from "./RecommandCardForm"

export default function RecommandCardView() {
  const {
    allMarkdownRemark: { nodes: devopes },
  } = useStaticQuery(graphql`
    query DevopsCards {
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
    <RecommandCardForm techs={sampleSize(devopes, 4)} image="/main_all.png" />
  )
}
