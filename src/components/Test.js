import React from "react"
import { Paper, Typography, makeStyles } from "@material-ui/core"
import Question from "./Question"
import Progress from './Progress'
const useStyles = makeStyles({
  main: {
    borderBottom: "5px solid #6CA0DC",
    display: "inline-block",
    marginBottom: "100px",
  },
  chapterContianer: {
    display: "flex",
    marginBottom: "50px",
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
})

const Test = () => {
  const classes = useStyles()
  return (
    <Paper elevation={0}>
      <Progress/>
      <Typography className={classes.main} variant="h2" color="primary">
        Test
      </Typography>

      <Question />
    </Paper>
  )
}

export default Test
