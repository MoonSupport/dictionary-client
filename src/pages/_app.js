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
      main: "#ffffff",
    },
    secondary: {
      main: "#8c2416",
    },
  },
})

const AppWrapper = ({ children }) => {
  console.log("AppWrapper")
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

function MyApp({ Component, pageProps }) {
  console.log("MyApp")

  return (
    <AppWrapper pageProps={pageProps}>
      dd
      <Component {...pageProps} />
    </AppWrapper>
  )
}

MyApp.getInitialProps = async appContext => {
  console.log("MyApp.getInitialProps")
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
