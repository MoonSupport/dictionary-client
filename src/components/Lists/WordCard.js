import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Link, Card, CardContent, CardMedia } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    width: 345,
    padding: 10,
    margin: "0 auto",
  },
  link: {
    padding: "12px",
    cursor: "pointer",
    fontSize: "14px",
  },
})

export default function WordCard({ link, image, children }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </CardContent>
      <Link underline="none" className={classes.link} href={link}>
        더보기
      </Link>
    </Card>
  )
}
