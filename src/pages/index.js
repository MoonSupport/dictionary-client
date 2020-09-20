import React from "react"
import AppFrame from "../components/Layout/AppFrame"
import SideTitle from "../components/SideTitle"
import Index from "../components/Index"

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <AppFrame>
      <div className={classes.container}>
        <Index />
        <SideTitle />
      </div>
    </AppFrame>
  )
}
