import React from 'react';
import { makeStyles, 
    // useTheme 
} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    marginTop: 80,
    maxWidth: '100%',
    flexGrow: 1,
  },
});

export default function Navigation({activeStep, setActiveStep}) {
  const classes = useStyles();
  const handlePreviousClick = () => {
    setActiveStep((activeStep)=>{
        setActiveStep(--activeStep)
    })
    }
    const handleNextClick = () => {
        console.log('lcikc')
        setActiveStep((activeStep)=>{
            setActiveStep(++activeStep)
        })
    }
  return (
      <>
        <Button
        onClick={handlePreviousClick}
        disabled={activeStep === 0}
        >
        이전 문제
        </Button>
        {activeStep === 9 ? (
        <Button>
            제출
            </Button>
            ):(
            <Button
            onClick={handleNextClick}
            disabled={activeStep === 9}>
            다음 문제
            </Button>
        )}
        </>
  );
}