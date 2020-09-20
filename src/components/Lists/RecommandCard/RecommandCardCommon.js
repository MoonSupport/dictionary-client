import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RecommandCardForm from "./RecommandCardForm"
import { sampleSize } from "lodash"

export default function RecommandCardView() {
  const {
    allMarkdownRemark: { nodes: commons },
  } = useStaticQuery(graphql`
    query CommonCards {
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
    <RecommandCardForm techs={sampleSize(commons, 4)} image="/main_all.png" />
  )
}
