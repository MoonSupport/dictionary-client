import React from "react"
import AppFrame from "../components/Layout/AppFrame"
import SearchBar from "../components/Forms/SearchBar"
import RecommandCard from "../components/Lists/RecommandCard/index"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
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
    <AppFrame>
      <div className={classes.container}>
        <SearchBar />
        <RecommandCard />
      </div>
    </AppFrame>
  )
}
