import React from "react"
import TopNav from "../components/Layout/TopNav"
import SearchBar from "../components/Forms/SearchBar"
import WordPage from "../components/Layout/WordPage"
import { Grid, Box } from "@material-ui/core"

export default function Home() {
  return (
    <>
      <TopNav />
      <SearchBar />
      <WordPage>
        <Grid item xs={6}>
          <Box>canonicalize</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>Tilt</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>karma</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>disputes</Box>
        </Grid>
      </WordPage>
    </>
  )
}
