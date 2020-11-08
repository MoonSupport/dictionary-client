import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    link: {
        color: 'inherit',
        marginTop: 15,
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    }
});

const Help = () => {
    const classes = useStyles()
    return (<Box style={{ padding: '30px', margin: '20px 0px', background: '#FAD4AE', border: '2px solid #FAD4AE', borderRadius: '5px' }}>
        <Typography variant="h4">DICTIONARY와 함께 해주세요!</Typography>
        <hr />
        <Typography>DICTIONARY는 아직 많은 단어와 기능들이 부족합니다.</Typography>
        <Typography>흥미가 있으신 분들, Github의 다른 프로젝트에 기여하고 싶은 분들, 협업 경험을 얻고 싶은 분들</Typography>
        <Typography>DICTIONARY를 통해 참여 하실 수 있습니다 :)</Typography>
        <a className={classes.link} href="https://github.com/meotitda/DICTIONARY/blob/master/docs/CONTRIBUTE.md">
            <GitHubIcon style={{ fontSize: 40 }} />
            <Box style={{ marginLeft: 10, fontSize: 20 }} component="span">참여하기</Box>
        </a>
    </Box >)
}

export default Help;