import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Box } from "@material-ui/core"
import WordPage from "../Lists/WordCard"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
  },
  container: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    width: "80rem",
  },
  pageContainer: {
    margin: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function CenteredGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.pageContainer}>
          <WordPage link="/page1" image="/main_frontend.jpg">
            <Grid item xs={6}>
              <Box>canonicalize</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>Tilt</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>karma</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>disputes</Box>
            </Grid>
          </WordPage>
        </div>
        <div className={classes.pageContainer}>
          <WordPage link="/page1" image="/main_backend.png">
            <Grid item xs={6}>
              <Box>canonicalize</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>Tilt</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>karma</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>disputes</Box>
            </Grid>
          </WordPage>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.pageContainer}>
          <WordPage link="/page1" image="/main_all.png">
            <Grid item xs={6}>
              <Box>canonicalize</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>Tilt</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>karma</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>disputes</Box>
            </Grid>
          </WordPage>
        </div>
        <div className={classes.pageContainer}>
          <WordPage link="/page1" image="/main_frontend.jpg">
            <Grid item xs={6}>
              <Box>canonicalize</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>Tilt</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>karma</Box>
            </Grid>
            <Grid item xs={6}>
              <Box>disputes</Box>
            </Grid>
          </WordPage>
        </div>
      </div>
    </div>
  )
}
