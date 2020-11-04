import React, { useState } from "react"
import { Paper, Typography, makeStyles, Box, Link } from "@material-ui/core"
import Question from "./Question"
import Progress from './Progress'
import Navigation from './Navigation'
const useStyles = makeStyles({
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
  nav: {
    cursor: 'pointer',
    marginTop: '20px',
    width: '100px',
    border: '2px solid #333',
    color: "#333",
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    '&:hover': {
      color: "#910000",
      borderColor: '#910000'
    },
  }
})

const Test = ({ questionMap, questionss, answers }) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0);
  const [chooses, setChooses] = useState([]);

  return (
    <Paper style={{ width: '100%' }} elevation={0}>
      <img className={classes.subtitle1} src="/titleLogo.png" />
      <Box component="a" href="/" className={classes.nav}>
        <Typography>
          첫 화면으로
        </Typography>
      </Box>
      <Progress activeStep={activeStep} />
      <Question questionMap={questionMap} questionss={questionss} activeStep={activeStep} chooses={chooses} setChooses={setChooses} />
      <Navigation activeStep={activeStep} setActiveStep={setActiveStep} chooses={chooses} answers={answers} questionMap={questionMap} questionss={questionss} />
    </Paper>
  )
}

export default Test
