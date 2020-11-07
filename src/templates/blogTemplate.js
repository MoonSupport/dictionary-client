import React from "react"
import { graphql } from "gatsby"
import { Box } from "@material-ui/core"
import LabelList from "../components/LabelList"
import AppFrame from "../components/Layout/AppFrame"
// import css from "../../static/css.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const {
    html,
    frontmatter: { title, label, hashTag },
  } = markdownRemark

  const content = html
  return (
    <AppFrame>
      <Box style={{ marginLeft: 15 }}>
        <Box component="h1">{title}</Box>
        <LabelList labels={label} />
        <br />
        {hashTag &&
          hashTag.map((value) => (
            <a href="#">
              #{value}<span> </span>
            </a>
          ))}
        <Box component="h2">설명</Box>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Box>
    </AppFrame >
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        label
        hashTag
        slug
      }
    }
  }
`
