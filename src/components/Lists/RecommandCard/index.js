import React from "react"
import RecommandCardCommon from "./RecommandCardCommon"
import RecommandCardFrontend from "./RecommandCardFrontend"
import RecommandCardBackend from "./RecommandCardBackend"
import RecommandCardDevops from "./RecommandCardDevops"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  container: {
    marginTop: 20,
    justifyContent: "center",
  },
})

const RecommandCard = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.container} container spacing={3}>
      <Grid item xl={3} md={6} sm={12}>
        <RecommandCardCommon />
      </Grid>
      <Grid item xl={3} md={6} sm={12}>
        <RecommandCardFrontend />
      </Grid>
      <Grid item xl={3} md={6} sm={12}>
        <RecommandCardBackend />
      </Grid>
      <Grid item xl={3} md={6} sm={12}>
        <RecommandCardDevops />
      </Grid>
    </Grid>
  )
}

export default RecommandCard
