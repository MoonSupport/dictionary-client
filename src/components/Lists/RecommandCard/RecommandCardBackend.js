import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import RecommandCardForm from "./RecommandCardForm"
import { sampleSize } from "lodash"

export default function RecommandCardView() {
  useEffect(() => {}, [])

  const {
    allMarkdownRemark: { nodes: backends },
  } = useStaticQuery(graphql`
    query BackendCards {
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
    <RecommandCardForm
      techs={sampleSize(backends, 4)}
      image="/main_backend.png"
    />
  )
}
