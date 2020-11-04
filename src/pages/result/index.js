import React, {  useMemo, useState } from 'react'
import { useLocation } from '@reach/router';
import Helmet from "react-helmet"
import {fetch} from 'whatwg-fetch'
import { Box } from '@material-ui/core'
import queryString from 'query-string';
import Contributor from '../../components/Contributor'



const Result = () => {
    const  [users, setUsers]  = useState([])
    const location = useLocation()

    const wrongs = getWrongs(location);
    const userPromise  = getUser()
    useMemo(()=> {
        userPromise.then(parseJSON).then(function (data){
            console.log('data', data)
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

function getWrongs(location) {
    const param = queryString.parse(location.search);

    if(!param) return []

    const { wrong } = param;

    if(!wrong) return []
    const decodeWrongs = decodeURIComponent(wrong);
    const wrongs = JSON.parse(decodeWrongs);
    return wrongs;
}

function parseJSON(response) {
    return response.json()
  }
  

async function getUser() {
    return fetch('https://api.github.com/repos/MoonSupport/dictionary-client/contributors')
} 

function sendLink() {
    if(!window.Kakao) {
        return
    }
    if(!window.Kakao.isInitialized()) {
        window.Kakao.init('6b28d3fe635cd8540e6b76f7ec8833fb')
    }

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