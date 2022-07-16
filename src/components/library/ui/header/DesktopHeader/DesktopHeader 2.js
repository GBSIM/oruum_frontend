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

export default function DesktopHeader() {
    const {searchWindowOn} = useSelector(state => state.window);

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
                <CircleButton
                    image={require('../../icons/icon_notification_dark_grey.png')}
                    clickEvent={openAlarmWindowEvent}></CircleButton>
                <CircleButton
                    image={require('../../icons/icon_more_dark_grey.png')}
                    clickEvent={openMoreWindowEvent}></CircleButton>
                <RoundedButton
                    text='로그인'></RoundedButton>
                <div style={{width:'20px'}}></div>
            </div> 
            <SearchWindow></SearchWindow>
            <AlarmWindow></AlarmWindow>
            <MoreWindow></MoreWindow>
        </div>
    )
}