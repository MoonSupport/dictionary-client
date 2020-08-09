import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Button, Card, CardContent, CardMedia } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

export default function ImgMediaCard({ children }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="/main_frontend.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </CardContent>
      <Button size="small" color="primary">
        더보기
      </Button>
    </Card>
  )
}
