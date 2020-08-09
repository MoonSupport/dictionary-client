import React from "react"
import { TextField, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
  },
  input: {
    fontSize: "2rem",
  },
})

export default function SearchBar() {
  const classes = useStyles()

  return (
    <form className={classes.form}>
      <Box component="h1">검색어를 입력하세요</Box>
      <TextField
        InputProps={{
          className: classes.input,
        }}
        fullWidth
        id="standard-basic"
      />
    </form>
  )
}
