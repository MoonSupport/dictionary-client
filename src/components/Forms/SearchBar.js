import React from "react"
import { TextField, InputAdornment, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles({
  searchAlert: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
  },
  input: {
    fontSize: "1.5rem",
  },
})

export default function SearchBar() {
  const classes = useStyles()

  return (
    <form className={classes.form}>
      <Typography className={classes.searchAlert}>
        검색어를 입력하세요
      </Typography>
      <TextField
        InputProps={{
          className: classes.input,
          endAdornment: (
            <InputAdornment position="end">
              {/* <SearchIcon /> */}
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </form>
  )
}
