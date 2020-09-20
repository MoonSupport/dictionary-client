import React from "react"
import { Box, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import clsx from 'clsx'



const useStyles = makeStyles({
    sideTitle : {
        width: '10vw',
        height:'100vh',
        backgroundImage: "url('/background-texture.png')",
        backgroundRepeat: 'repeat',
        display:'flex',
        flexDirection: 'column',
    },
    title: {
        flex: '1 0 auto',
    },
    vertical : {
        writingMode: 'vertical-lr',
    },
    black : {
        color: 'black',

    },
    white : {
        color: 'white',

    },
    sideItem: {
        width : '5vw',
        fontSize: '3vw',
        fontFamily: '"Do Hyeon", "sans-serif"'
    },
    center: {
        display:'flex',
        margin: '10px auto',
    },
  })

const SideTitle = () => {
const classes = useStyles()
return    (
    <Box className={classes.sideTitle}>

        <Typography className={clsx(classes.title, classes.white,classes.sideItem, classes.vertical, classes.center)}>
            DICTIONARY
        </Typography>
        <Typography className={clsx(classes.black, classes.sideItem, classes.vertical, classes.center)}>
            표지
        </Typography>
        <Typography className={clsx(classes.black, classes.sideItem, classes.vertical, classes.center)}>
            목차
        </Typography>
        <Typography className={clsx(classes.black, classes.sideItem, classes.vertical, classes.center)}>
            부록
        </Typography>
        <Link>
            <img className={clsx(classes.sideItem, classes.center)} src="/github_logo.png" />
        </Link>
        <a>
            <Typography className={clsx(classes.white, classes.sideItem, classes.vertical, classes.center)}>
                기여 하기
            </Typography>
        </a>

    </Box>
)

}

export default SideTitle