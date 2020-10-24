import React from "react"
import Layout from "./Layout"
import { makeStyles, Typography, Button } from "@material-ui/core"
const useStyles = makeStyles({
  startButton: {
    width: 335,
    height: 100,

    backgroundColor: '#ff5100'
  }
})

const Intro = () => {
  const classes = useStyles()
  return (
    <Layout className={classes.layout}>
        <Typography variant="subtitle1" >개발자라면 알아야 할 단어모음</Typography>
        <Typography variant="subtitle2" >지금 테스트해보세요.</Typography>
      <Button variant="contained" color="secondary">
        테스트 시작하기
        </Button>
        <Button variant="contained" color="secondary">
        출제 문제보기
        </Button>
      <Typography variant="h2" component="h2" >DICTIONARY</Typography>
    </Layout>
  )
}

export default Intro
