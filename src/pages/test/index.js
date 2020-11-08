import React from "react"
import Layout from "../../components/Layout"
import { Typography, Button, makeStyles, Box, Link } from "@material-ui/core"

const useStyles = makeStyles({
  title: {
    marginTop: 80
  },
  subtitle1: {
    marginTop: 20
  },
  subtitle2: {
    marginTop: 20,
    paddingTop: 40
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px 80px'
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20vh'
  },
  button: {
    marginTop: 10,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 50
  }
})


const buttonCommonStyle = {
  width: 335,
  height: 60,
}


const Test = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Link href="/" >
        <img className={classes.subtitle1} src="/titleLogo.png" />
      </Link>
      <Typography className={classes.subtitle2} variant="h5" >시험 칠 타입을 선택해주세요! </Typography>
      <Box className={classes.buttonWrapper}>
        <Link href="/test/all" >
          <Button className={classes.button} style={buttonCommonStyle} variant="contained" color="secondary">
            All
        </Button>
        </Link>
        <Link href="/test/frontend" >
          <Button className={classes.button} style={buttonCommonStyle} variant="contained" color="secondary">
            Frontend
        </Button>
        </Link>
        <Link href="/test/backend" >
          <Button className={classes.button} style={buttonCommonStyle} variant="contained" color="secondary">
            Backend
        </Button>
        </Link>
      </Box>
      <a className={classes.footer} href="https://github.com/meotitda">
        <img src="/footerLogo.png" />
      </a>
    </Layout >
  )
}

export default Test
