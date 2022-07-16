import './KakaoLogin.css';

import React from 'react';

const {Kakao} = window;
const loginWithKakao = () =>{
    Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000'
    })
}

export default function KakaoLogin() {
    return (
        <div>
            <a id="custom-login-btn" onClick={loginWithKakao} className='kakao-login-button'>
              <span className='kakao-login-button-text'>kakao 로그인</span>
            </a>
        </div>
    );
};