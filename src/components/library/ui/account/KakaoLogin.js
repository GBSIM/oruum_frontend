import './KakaoLogin.css';

import React from 'react';

const {Kakao} = window;
const loginWithKakao = () =>{
  console.log("hello");
  Kakao.Auth.authorize({
    redirectUri: 'https://oruum.com'
  })
}

export default function KakaoLogin() {
  return (
    <div>
      <a id="custom-login-btn" onClick={loginWithKakao} className='kakao-login-button'>
        {/* <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="222"
        /> */}
        <span className='kakao-login-button-text'>카카오 로그인</span>
      </a>
    </div>
  );
};