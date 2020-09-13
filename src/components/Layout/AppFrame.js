import React from "react"
import AppHeader from "./AppHeader"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  overrides: {
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
      <AppHeader />
      {children}
    </ThemeProvider>
  )
}
