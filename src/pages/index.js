import React from "react"
import TopNav from "../components/Layout/TopNav"
import SearchBar from "../components/Forms/SearchBar"
import RecommandCard from "../components/Layout/RecommandCard"
import { Grid, Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <TopNav />
      <SearchBar />
      <RecommandCard />
    </div>
  )
}
