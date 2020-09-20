import React from "react"
import { Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  labels: {
    display: "flex",
  },
  label: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 25,
    marginRight: 5,
    backgroundColor: ({ label }) => {
      switch (label) {
        case "Common":
          return "#FDFD96"
        case "Frontend":
          return "#ADD8E6"
        case "Devops":
          return "#B399D4"
        case "Database":
          return "#FF6961"
        case "Backend":
          return "#77DD77"
      }
    },
    border: "2px solid #000",
  },
})

export default function LabelList({ labels }) {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.labels}>
        {labels.map(label => (
          <Label label={label} />
        ))}
      </Box>
    </>
  )
}

const Label = ({ label }) => {
  const classes = useStyles({ label })
  return <div className={classes.label}>{label}</div>
}
