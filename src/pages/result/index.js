import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from '@reach/router';
import Helmet from "react-helmet"
import { fetch } from 'whatwg-fetch'
import { Box, Typography } from '@material-ui/core'
import queryString from 'query-string';
import Contributor from '../../components/Contributor'
import Rank from '../../components/Rank';
import { floor } from 'lodash'



const Result = () => {
    const [users, setUsers] = useState(0)
    const [correctNumber, setCorrectNumber] = useState()
    const location = useLocation()

    const wrongs = getWrongs(location);
    const userPromise = getUser()
    useEffect(() => {
        setCorrectNumber((10 - wrongs.length))
        userPromise.then(parseJSON).then(function (data) {
            const tempUsers = []
            data.map((user) => {
                tempUsers.push({
                    name: user.login,
                    url: user.html_url,
                    avatar: user.avatar_url,
                    contributions: user.contributions
                })
            })
            setUsers(tempUsers)
        })
    }, [])


    return (
        <>
            <Helmet>
                <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
            </Helmet>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', alignItems: 'center' }} id="create-kakao-link-btn" onClick={sendLink}>
                    <img width="50vw"
                        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
                    />
                    <p style={{ fontSize: '20px', marginLeft: '10px' }}>
                        카톡 공유하기
                    </p>
                </div>

            </Box>
            <Box style={{ padding: '15px', border: '2px solid #333 ', borderRadius: '5px' }}>
                <Typography style={{ fontWeight: 'bold' }} variant="h3">결과표</Typography>
                <Box style={{ display: 'flex' }}>
                    <Box>
                        <Rank correct={floor(correctNumber / 2)} />
                    </Box>
                    <Box style={{ display: 'flex', marginLeft: 30, alignItems: 'center' }}>
                        <Typography variant="h4">{correctNumber * 10} 점</Typography>
                    </Box>
                </Box>
                <Box style={{ marginTop: 10, display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography> 정답수 {correctNumber}/10개</Typography>
                </Box>
                <Box>
                    <Typography variant="h4">틀린 문제</Typography>
                    <Box>
                        {wrongs.map((wrong, index) => (
                            <div key={index}>
                                <a target="_blank" href={`https://github.com/meotitda/DICTIONARY/blob/master/DIC/${wrong.question.charAt(0)}/${wrong.question}.md`}>{wrong.question}</a>
                            </div>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Contributor users={users} />
        </>
    )
}

function getWrongs(location) {
    const param = queryString.parse(location.search);

    if (!param) return []

    const { wrong } = param;

    if (!wrong) return []
    const decodeWrongs = decodeURIComponent(wrong);
    const wrongs = JSON.parse(decodeWrongs);
    return wrongs;
}

function parseJSON(response) {
    return response.json()
}


async function getUser() {
    return fetch('https://api.github.com/repos/meotitda/DICTIONARY/contributors')
}

function sendLink() {

    if (!window.Kakao) {
        alert('오류가 발생했습니다. 새로 고침 후 다시 시도해주세요!')
        return
    }
    if (!window.Kakao.isInitialized()) {
        window.Kakao.init('6b28d3fe635cd8540e6b76f7ec8833fb')
    }

    window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: 'DICTIONARY',
            description: '개발자들의 영어단어장',
            imageUrl:
                'https://avatars2.githubusercontent.com/u/68211377?s=400&u=1dcbf97c7e693cc8c95634c7ee89b2565883fc7c&v=4',
            link: {
                mobileWebUrl: 'https://www.dictionarymoon.tk/',
                webUrl: 'https://www.dictionarymoon.tk/',
            },
        },
        buttons: [
            {
                title: '테스트하기',
                link: {
                    mobileWebUrl: 'https://www.dictionarymoon.tk/',
                    webUrl: 'https://www.dictionarymoon.tk/',
                },
            },
            {
                title: 'GITHUB',
                link: {
                    mobileWebUrl: 'https://github.com/meotitda/DICTIONARY',
                    webUrl: 'https://github.com/meotitda/DICTIONARY',
                },
            },
        ],
    })
}


export default Result