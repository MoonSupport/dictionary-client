import React from "react"
import { makeStyles,  Box } from "@material-ui/core"
const useStyles = makeStyles({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const Intro = ({children}) => {
  const classes = useStyles()
  return (
    <Box className={classes.layout}>
        {children}
    </Box>
  )
}

export default Intro
