import React from "react"
import { Box, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles({
    chapterContianer: {
        display: 'flex',
        marginBottom: 20
    },
    chapterTitle1: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        backgroundColor: '#CDE8EF'
    },

    chapterTitle2: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
    },
    words: {
        fontSize: 26,
        marginBottom: 10,
    },
    listContainer: {
        marginBottom: 40,
    }
})

export default function RecommandIndexForm({ words, engTitle, korTitle }) {
    const classes = useStyles()
    return (
      <Box>
      <Box className={classes.chapterContianer}>
    <Typography className={classes.chapterTitle1}  variant="h3" color="secondary">{engTitle}</Typography>
    <Typography className={classes.chapterTitle2} variant="h3" color="primary">{korTitle}</Typography>
      </Box>
      <Box className={classes.listContainer}>
          {words.map(word=>(
              <Link href={word?.frontmatter?.slug}>
              <Box className={classes.words}>
                 {word?.frontmatter?.title + ' '}
                 [{word?.frontmatter?.label.join(',')}]
              </Box>
              </Link>
          ))}
      </Box>
      </Box>
    )
}