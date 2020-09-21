import React from "react"
import { Grid, Box, Typography } from "@material-ui/core"
import WordPage from "../WordCard"

export default function RecommandCardForm({ techs, image }) {
  return (
    <WordPage link="/page1" image={image}>
      {techs.map((tech,index) => (
        <Grid key={index} item xs={12} sm={6}>
          <Box
            underline="none"
            component="a"
            href={tech?.frontmatter?.slug}
            style={{ textDecoration: "none" }}
          >
            <Typography color="primary" noWrap={true}>
              {tech?.frontmatter?.title}
            </Typography>
          </Box>
        </Grid>
      ))}
    </WordPage>
  )
}
