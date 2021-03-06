import React from "react"
import { makeStyles,  Box } from "@material-ui/core"
const useStyles = makeStyles({
  layout: {
    width: 'calc(100% - 40px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexFlow: 'column nowrap',
    margin: '0px 20px',
    height: '100vh'
  },
})


const Layout = ({children}) => {
  const classes = useStyles()
  return (
    <Box className={classes.layout}>
        {children}
    </Box>
  )
}

export default Layout
