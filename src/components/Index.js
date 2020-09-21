import React from "react"
import { Paper, Typography, Box, makeStyles } from "@material-ui/core"

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

const IndexList = () => {
    const classes = useStyles()
    return (
        <Box>
        <Box className={classes.chapterContianer}>
            <Typography className={classes.chapterTitle1}  variant="h3" color="secondary">FrontEnd</Typography>
            <Typography className={classes.chapterTitle2} variant="h3" color="primary">프론트 엔드</Typography>
        </Box>
        <Box>
            <Typography>단어</Typography>
        </Box>
        </Box>
        )
}

const Index = () => {
const classes = useStyles()
return    (
    <Paper elevation={0}>
        <Typography  className={classes.main} variant='h2' color='primary'>INDEX</Typography>
        <IndexList />
    </Paper>

)

}

export default Index