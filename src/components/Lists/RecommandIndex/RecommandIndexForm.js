import React, { useState, useEffect } from "react"
import { Box, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles({
  chapterContianer: {
    display: "flex",
    marginBottom: 20,
  },
  chapterTitle1: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    backgroundColor: "#6CA0DC",
  },

  chapterTitle2: {
    display: "inline-block",
    padding: "0.5rem 1rem",
  },
  words: {
    fontSize: 26,
    marginBottom: 10,
  },
  listContainer: {
    marginBottom: 40,
  },
})

export default function RecommandIndexForm({ words, engTitle, korTitle }) {
  const [datas, setData] = useState([])
  const classes = useStyles()

  useEffect(() => {
    setData(words)
  })

  return (
    <Box>
      <Box className={classes.chapterContianer}>
        <Typography
          className={classes.chapterTitle1}
          variant="h3"
          color="secondary"
        >
          {engTitle}
        </Typography>
        <Typography
          className={classes.chapterTitle2}
          variant="h3"
          color="primary"
        >
          {korTitle}
        </Typography>
      </Box>
      <Box className={classes.listContainer}>
        {datas.map((word,index) => (
          <Link key={index} href={word?.frontmatter?.slug}>
            <Box className={classes.words}>
              {word?.frontmatter?.title + " "}[
              {word?.frontmatter?.label.join(",")}]
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  )
}
