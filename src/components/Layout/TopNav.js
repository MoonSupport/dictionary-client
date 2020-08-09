import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  ThemeProvider,
} from "@material-ui/core"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import { makeStyles } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#8c2416",
    },
  },
})
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
    },
  }
})

export default function TopNav() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="secondary"
          aria-label="menu"
        >
          <MenuBookIcon />
        </IconButton>
        <Typography color="secondary" variant="h6" className={classes.title}>
          DICTIONARY
        </Typography>
        <Button color="secondary">LIST</Button>
      </Toolbar>
    </ThemeProvider>
  )
}
