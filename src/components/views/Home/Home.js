import './Home.css';

import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { closeAllWindows } from '../../../_reducers/window';

import DesktopHeader from '../../library/ui/header/DesktopHeader/DesktopHeader';
import MobileHeader from '../../library/ui/header/MobileHeader/MobileHeader';
import MobileFooter from '../../library/ui/footer/MobileFooter/MobileFooter';

import TodayMarket from '../../library/ui/home/TodayMarket/TodayMarket';
import Gainer from '../../library/ui/home/Gainer/Gainer';
import Loser from '../../library/ui/home/Loser/Loser';
import EarningsCalendar from '../../library/ui/home/EarningsCalendar/EarningsCalendar';
import SubHome from '../../library/ui/subcontents/SubHome/SubHome';
import { switchLoginStatusTrue, setProfile } from '../../../_reducers/user';

export default function Home() {
    const dispatch = useDispatch();
    const closeAllWindowsEvent = () => {
        dispatch(closeAllWindows());
    }

    const {isLogin} = useSelector(state => state.user);

    const href = window.location.href;
    let params = new URL(href).searchParams;
    let code = params.get("code");
    console.log(code);
    if (code != null) {
        KakaoRedirectHandler();
    }

    return (
        <div className='page'>
            <DesktopHeader></DesktopHeader>
            <MobileHeader></MobileHeader>
            <div className='main-contents' onClick={closeAllWindowsEvent}>
                <div className='content-box top'>
                    <TodayMarket></TodayMarket>
                </div>
                <div className='content-box'>
                    <Gainer></Gainer>
                </div>
                <div className='content-box'>
                    <Loser></Loser>
                </div>
                {/* <div className='content-box'>
                    <EarningsCalendar></EarningsCalendar>
                </div> */}
            </div>
            <MobileFooter></MobileFooter>
            {/* <div className='sub-contents-right' onClick={closeAllWindowsEvent}>
                <SubHome></SubHome>
            </div> */}
        </div>
    )
}

const KakaoRedirectHandler = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
      let params = new URL(document.location.toString()).searchParams;
      let code = params.get("code");
      let grant_type = "authorization_code";
      let client_id = "007d2924772dce6c3712723cae510082";
  
      axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=https://oruum.com&code=${code}`
          , {
      headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res) => {
        console.log(res)
        let accessToken = res.data.access_token;
        let refreshToken = res.data.refresh_token;
        let idToken = res.data.id_token;
        console.log(accessToken);
        window.Kakao.Auth.setAccessToken(accessToken);
        window.Kakao.API.request({
            url: "/v2/user/me",
        }).then((data) => {
            console.log(data);
            dispatch(setProfile(data.properties.nickname,data.properties.thumbnail_image));
        })
        dispatch(switchLoginStatusTrue());        
    })
    }, [])
  };