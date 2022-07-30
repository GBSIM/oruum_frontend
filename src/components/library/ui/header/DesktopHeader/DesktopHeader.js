import './DesktopHeader.css';

import { useSelector,useDispatch } from "react-redux";

import { openAlarmWindow, openMoreWindow, openSearchWindow } from '../../../../../_reducers/window';

import DesktopNavBar from '../../unit/DesktopNavBar/DesktopNavBar';
import SearchInput from '../../unit/SearchInput/SearchInput';
import CircleButton from '../../unit/CircleButton/CircleButton';
import RoundedButton from '../../unit/RoundedButton/RoundedButton';
import SearchWindow from '../../unit/SearchWindow/SearchWindow';
import AlarmWindow from '../../unit/AlarmWindow/AlarmWindow';
import MoreWindow from '../../unit/MoreWindow/MoreWindow';
import KakaoLogin from '../../account/KakaoLogin/KakaoLogin';
import KakaoLogout from '../../account/KakaoLogout/KakaoLogout';

export default function DesktopHeader() {
    const {searchWindowOn} = useSelector(state => state.window);
    const {isLogin} = useSelector(state => state.user);


    const dispatch = useDispatch();
    const openMoreWindowEvent = () => {
        dispatch(openMoreWindow());
    }
    const openAlarmWindowEvent = () => {
        dispatch(openAlarmWindow());
    }
    const openSearchWindowEvent = () => {
        dispatch(openSearchWindow());
    }

    let logoImage;
    if (searchWindowOn) {
        logoImage = <div></div>
    } else {
        logoImage = 
        <a href='/'>
            <img className='desktop-header-logo' src={require('../../logos/logo_oruum.png')}></img>
        </a>
    }

    let AccountButton;
    if (isLogin) {
        AccountButton = <KakaoLogout></KakaoLogout>
    } else {
        AccountButton = <KakaoLogin></KakaoLogin>
    }

    let MoreButton;
    let AlarmButton;
    if (isLogin) {
        MoreButton = <CircleButton
                        image={require('../../icons/icon_more_dark_grey.png')}
                        clickEvent={openMoreWindowEvent}></CircleButton>
        AlarmButton = <CircleButton
                        image={require('../../icons/icon_notification_dark_grey.png')}
                        clickEvent={openAlarmWindowEvent}></CircleButton>
    } else {
        MoreButton = <div></div>
    }

    return (
        <div className='desktop-header'>
            <div className='desktop-header-left-container'>
                {logoImage}
                <SearchInput
                    placeholder='종목을 검색하세요!'
                    clickEvent={openSearchWindowEvent}></SearchInput>
            </div>
            <div className='desktop-header-nav-bar-container'>
                <DesktopNavBar></DesktopNavBar>
            </div>
            <div className='desktop-header-right-container'>
                {AlarmButton}
                {MoreButton}
                {AccountButton}
                <div style={{width:'20px'}}></div>
            </div> 
            <SearchWindow></SearchWindow>
            <AlarmWindow></AlarmWindow>
            <MoreWindow></MoreWindow>
        </div>
    )
}