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
    frontmatter: { title, label, mean, origin, pronunciation, relation },
  } = markdownRemark

  const content = html.split("<content>")[1].split("</content")[0]
  return (
    <AppFrame>

      <Box style={{ marginLeft: 15 }}>
        <Box component="h1">{title}</Box>
        <LabelList labels={label} />

        <Box component="h2">의미</Box>
        <Box>{mean}</Box>

        <Box component="h2">원형</Box>
        <Box>{origin}</Box>

        <Box component="h2">발음</Box>
        <Box>{pronunciation}</Box>

        <Box component="h2">설명</Box>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Box component="h2">관련 기술</Box>
        {relation &&
          relation.map((value, index) => (
            <div key={index} style={{ marginBottom: 10 }}>
              {value.startsWith(`${index + 1}.`)
                ? value
                : `${index + 1}. ${value}`}
            </div>
          ))}
      </Box>
    </AppFrame>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        label
        mean
        origin
        pronunciation
        relation
        slug
      }
    }
  }
`