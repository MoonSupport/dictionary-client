import React from 'react';
import { makeStyles, ThemeProvider, createMuiTheme,
    // useTheme 
} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Box } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  processNumber: {
    textAlign:'right',
    paddingRight: 16
  }
});

const theme = createMuiTheme({
    overrides: {
        MuiMobileStepper: {
            root: {
                background: 'none'
            },
            progress: {
                width: '100%',
                height: 10,
                borderRadius: '10px'
            }
        }
        // .MuiMobileStepper-root
    }
})



export default function ProgressMobileStepper({activeStep}) {
  const classes = useStyles();
//   const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.processNumber}>
      {activeStep}/9
      </Box>
        <MobileStepper
            variant="progress"
            steps={10}
            position="static"
            activeStep={activeStep}
            className={classes.root}
        />
    </ThemeProvider>
  );
}