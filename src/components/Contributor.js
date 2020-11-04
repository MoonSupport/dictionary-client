import { Box, Typography } from '@material-ui/core'
import React from 'react'
const Contributor = ({users}) => {
    console.log(users.length)
    return (
        <>
        <Box style={{display:'flex'}}>
            <img width="80px" src="/tropy.png" />
        <Typography variant="h2" style={{fontWeight:'bold'}}>프로젝트에 기여한 분들</Typography>
        </Box>
        {users.length > 0 && (
            <table style={{border: '1px solid #444444', 'borderCollapse': 'collapse'}}>
            <tr>
                {users.map(user=>(
                    <>
                <td style={{border:' 1px solid #444444'}} align="center">
                    <a href={user.url}>
                        <img src={user.avatar} width="100px;" alt=""/>
                        <br />
                        <sub>
                <b>{user.name}</b>
                </sub>
                </a>
                <br />
                <a href="#question-kentcdodds" title="Answering Questions">💬</a> 
                <a href="https://github.com/all-contributors/all-contributors/commits?author=kentcdodds" title="Documentation">📖</a> 
                <a href="https://github.com/all-contributors/all-contributors/pulls?q=is%3Apr+reviewed-by%3Akentcdodds" title="Reviewed Pull Requests">👀</a> 
                <a href="#talk-kentcdodds" title="Talks">📢</a>
                </td>

                </>
                ))}
            </tr>
        </table>
    )}
    </>
)
                }
export default Contributor


