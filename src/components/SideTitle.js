import React from "react"
import { Box, Typography, Link } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import clsx from 'clsx'



const useStyles = makeStyles({
    sideTitle : {
        width: '10vw',
        height:'100vh',
        backgroundColor: '#CDE8EF',
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
        width : '3rem',
        fontSize: '2rem',
        fontFamily: 'Comic Sans MS'
    },
    center: {
        display:'flex',
        alignItems: 'center',
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
        <Link>
            <img className={clsx(classes.sideItem, classes.center)} src="/github_logo_white.png" />
        </Link>
        <a>
            <Typography className={clsx(classes.white, classes.sideItem, classes.vertical, classes.center)}>
                CONTRIBUTE
            </Typography>
        </a>

    </Box>
)

}

export default SideTitle