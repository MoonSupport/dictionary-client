import React from "react"
import { TextField, Box, InputAdornment } from "@material-ui/core"
import { makeStyles, IconButton } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"

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
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
    </form>
  )
}
