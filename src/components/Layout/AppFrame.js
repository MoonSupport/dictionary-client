import React from "react"
import { CssBaseline } from '@material-ui/core'

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundImage: "url('/ground-texture.png')",
          backgroundRepeat: 'repeat',
        },
      },
    },
    MuiButton: {
      "&:hover": {
        background: "none",
      },
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#8c2416",
    },
  },
})

export default function AppFrame({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}
