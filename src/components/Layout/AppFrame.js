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
    alignItems: "center",
  },
  main : {
    width: '90vw',
    height:'100vh',
    backgroundRepeat: 'repeat',
}
}))

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          // backgroundColor: '#fff4ea'
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
      main: '#CDE8EF'
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
