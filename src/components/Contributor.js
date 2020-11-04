import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Contributor = ({ users }) => {
    const classes = useStyles();

    return (
        <>
            <Box style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                <img width="80vw" height="80vw" src="/tropy.png" />
                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>Project Contributor</Typography>
                </Box>
            </Box>

            {users.length > 0 && (
                <Grid container spacing={3}>
                    {users.map((user, index) => (
                        <Grid item xs={4} sm={3} md={2} lg={1}>
                            <div key={user.name} style={{ border: ' 1px solid #444444' }} align="center">
                                <a href={user.url}>
                                    <img src={user.avatar} width="100px;" alt="" />
                                    <br />
                                    <sub>
                                        <b>{user.name}</b>
                                    </sub>
                                </a>
                                <br />
                                {index < 5 && <span>🏅</span>}
                                {user.contributions > 100 && <span>⚜️</span>}
                                {user.contributions > 10 && <span>✨</span>}
                                {user.contributions > 1 && <span>🔰</span>}
                            </div>
                        </Grid>
                    ))}

                </Grid>
            )
            }
        </>
    )
}
export default Contributor


