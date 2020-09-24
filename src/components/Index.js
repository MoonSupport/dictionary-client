import React from "react"
import { Paper, Typography, makeStyles } from "@material-ui/core"
import RecommandIndex from '../components/Lists/RecommandIndex'
const useStyles = makeStyles({
    main: {
        borderBottom:'5px solid #CDE8EF',
        display: 'inline-block',
        marginBottom : '100px'
    },
    chapterContianer: {
        display: 'flex',
        marginBottom: '50px'
    },
    chapterTitle1: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        backgroundColor: '#CDE8EF'
    },

    chapterTitle2: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
    }
})


const Index = () => {
const classes = useStyles()
return    (
    <Paper elevation={0}>
        <Typography  className={classes.main} variant='h2' color='primary'>INDEX</Typography>
        <RecommandIndex />
    </Paper>

)

}

export default Index