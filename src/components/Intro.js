import React from "react"
import Layout from "./Layout"
import { Typography, Button, makeStyles, Box } from "@material-ui/core"

const useStyles = makeStyles({
  title: {
    marginTop: 80
  },
  subtitle1: {
    marginTop: 20
  },
  subtitle2: {
    marginTop: 20
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
      marginTop: 100
  },
  button: {
    marginTop: 10,
  },
  footerLogo: {

  }
})


const buttonCommonStyle = {
    width: 335,
    height: 60,
}


const Intro = () => {
  const classes = useStyles()
  return (
    <Layout>
      <img className={classes.subtitle1} src="/titleLogo.png" />
      <Typography className={classes.subtitle2} variant="subtitle2" >개발 관련 영단어로 알아보는 </Typography>
      <Typography className={classes.subtitle2} variant="subtitle2" >개발 지식 테스트</Typography>
      <Box className={classes.buttonWrapper}>
      <Button className={classes.button} style={buttonCommonStyle} variant="contained" color="secondary">
        시험 시작
        </Button>
        <Button className={classes.button} component="a" href="https://github.com/MoonSupport/DICTIONARY" style={buttonCommonStyle} variant="contained" color="secondary">
        단어 목록
        </Button>
        <Button className={classes.button} component="a" href="https://github.com/MoonSupport/DICTIONARY" style={buttonCommonStyle} variant="contained" color="secondary">
        기여 하기
        </Button>
        </Box>
        <img className={classes.footerLogo} src="/footerLogo.png" />
    </Layout>
  )
}

export default Intro
