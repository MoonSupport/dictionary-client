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

const Test = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0);

  //   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

  return (
    <Paper elevation={0}>
      <Typography className={classes.main} variant="h2" color="primary">
    {activeStep}/9
      </Typography>
      <Progress activeStep={activeStep}/>
      <Question />
      <Navigation activeStep={activeStep} setActiveStep={setActiveStep} />
    </Paper>
  )
}

export default Test
