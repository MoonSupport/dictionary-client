import React, { useEffect, useMemo, useState } from 'react'
import {Octokit} from '@octokit/core'
import Contributor from '../../components/Contributor'
import { Box } from '@material-ui/core'
import Helmet from "react-helmet"

const Result = () => {
    const  [users, setUsers]  = useState([])

    const param = window.location.search.replace('?wrong=','')
    const decodeWrongs = decodeURIComponent(param)
    const wrongs = JSON.parse(decodeWrongs)
    const userPromise  = getUser()
    
    useMemo(()=> {
        userPromise.then(({data})=>{
            const tempUsers = []
            data.map((user)=> {
                tempUsers.push({
                    name: user.login,
                    url: user.html_url,
                    avatar: user.avatar_url,
                })
            })
            setUsers(tempUsers)
        })
    },[])
    

    return (
        <>
    <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    </Helmet>
        <Box style={{display:'flex', justifyContent:'flex-end'}}>
        <div id="create-kakao-link-btn" onClick={sendLink}>
            <img
                src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
            />
            카톡 공유하기
            </div>

        </Box>
        <div>
            틀린문제 
        </div>
        {wrongs.map((wrong, index) => (
            <div key={index}>
                {wrong.question}
            </div>
        ))}
        <Contributor users={users} />
        </>
    )
}

async function getUser() {
    const octokit = new Octokit({ auth: `142b0da8b1480e84c58ed148d559c8918ef31276` });
    return await octokit.request('GET /repos/{owner}/{repo}/contributors', {
        owner: 'MoonSupport',
        repo: 'dictionary-client'
    })
} 

function sendLink() {
    if(!window.Kakao) {
        return
    }
    if(!window.Kakao.isInitialized()) {
        window.Kakao.init('6b28d3fe635cd8540e6b76f7ec8833fb')
    }

        console.log('window.Kakao')
        console.log('window.Kakao', window.Kakao)
        window.Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: 'DICTIONARY',
              description: '#D #I #C #T #I #O',
              imageUrl:
                'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
              },
            },
            buttons: [
              {
                title: '웹으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com',
                },
              },
              {
                title: '앱으로 보기',
                link: {
                  mobileWebUrl: 'https://developers.kakao.com',
                  webUrl: 'https://developers.kakao.com',
                },
              },
            ],
        })
}


export default Result