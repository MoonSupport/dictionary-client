import React from "react"
import { CssBaseline } from '@material-ui/core'
import SideTitle from "../../components/SideTitle"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  main : {
    width: '90vw',
    backgroundRepeat: 'repeat',
}
}))

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff'
        },
      },
    },
    MuiButton: {
      "&:hover": {
        background: "none",
      },
    },
  },
  typography: {
    fontFamily: [
      'Comic Sans MS'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#6CA0DC',
      secondary: '#CDE8EF'
    },
    secondary: {
      main: "#FFF",
    },
  },
})


export default function AppFrame({ children }) {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.container}>
        <div className={classes.main}>
        {children}
        </div>
        <div>
        <SideTitle />
        </div>
      </div>
    </ThemeProvider>
  )
}
