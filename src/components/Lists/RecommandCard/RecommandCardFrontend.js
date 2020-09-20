import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { sampleSize } from "lodash"
import RecommandCardForm from "./RecommandCardForm"

export default function RecommandCardView() {
  const {
    allMarkdownRemark: { nodes: frontends },
  } = useStaticQuery(graphql`
    query FrontendCards {
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
    <RecommandCardForm
      techs={sampleSize(frontends, 4)}
      image="/main_frontend.png"
    />
  )
}
