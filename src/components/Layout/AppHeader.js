import React from "react"
import { Toolbar, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: 20,
    },
  }
})

export default function AppHeader() {
  const classes = useStyles()

  return (
    <Toolbar>
      <Button
        href="/"
        component="a"
        disableRipple={true}
        color="secondary"
        className={classes.title}
      >
        DICTIONARY
      </Button>
    </Toolbar>
  )
}
