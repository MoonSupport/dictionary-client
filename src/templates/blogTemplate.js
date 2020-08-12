import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  const content = html.split("<content>")[1].split("</content")[0]
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
