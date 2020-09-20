import React from "react"
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"



const useStyles = makeStyles({
    MainTitle : {
        width: '90vw',
        height:'100vh',
        backgroundRepeat: 'repeat',
    }
  })

const MainTitle = () => {
const classes = useStyles()
return    (
    <Box className={classes.MainTitle}>
        <Typography component='h1'>
            DICTIONARY
        </Typography>
        <Typography component='h1'>
            사전
        </Typography>
        <Typography component='h1'>
            事前
        </Typography>
        <Typography component='h1'>
        dicionário
        </Typography>        <Typography component='h1'>
        অভিধান
        </Typography>
    </Box>

)

}

export default MainTitle