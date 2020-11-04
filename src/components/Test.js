import React, {useState} from "react"
import { Paper, Typography, makeStyles } from "@material-ui/core"
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
})

const Test = ({questionMap, questionss, answers}) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0);
  const [chooses, setChooses] = useState([]);

  return (
    <Paper style={{width:'100%'}}elevation={0}>
      <Typography className={classes.main} variant="h2" color="primary">
        hello?
      </Typography>
      <Progress activeStep={activeStep}/>
      <Question questionMap={questionMap} questionss={questionss} activeStep={activeStep} chooses={chooses} setChooses={setChooses} />
      <Navigation activeStep={activeStep} setActiveStep={setActiveStep} chooses={chooses} answers={answers} questionMap={questionMap} questionss={questionss} />
    </Paper>
  )
}

export default Test
