import './MobileHeader.css';

import { useSelector,useDispatch } from "react-redux";

import { openAlarmWindow, openMoreWindow, openSearchWindow, closeAllWindows } from '../../../../../_reducers/window';

import TransparentButton from '../../unit/TransparentButton/TransparentButton';
import MobileSearchWindow from '../../unit/MobileSearchWindow/MobileSearchWindow';
import MobileSearchInput from '../../unit/MobileSearchInput/MobileSearchInput';

export default function MobileHeader() {
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
    const closeAllWindowsEvent = () => {
        dispatch(closeAllWindows());
    }

    if (searchWindowOn) {
        return (
            <div className='mobile-header'>
                <div style={{width:'10px'}}></div>
                <TransparentButton
                    image={require('../../icons/icon_back_dark_grey.png')}
                    clickEvent={closeAllWindowsEvent}></TransparentButton>
                <MobileSearchInput
                    placeholder='종목을 검색하세요!'></MobileSearchInput>
                <MobileSearchWindow></MobileSearchWindow>
            </div>
        )
    } else {
        return (
            <div className='mobile-header'>
                <a href='/'>
                    <img className='mobile-header-logo' src={require('../../logos/logo_oruum.png')}></img>
                </a>
                <div style={{flex:1}}></div>
                <TransparentButton
                    image={require('../../icons/icon_search_dark_grey.png')}
                    clickEvent={openSearchWindowEvent}></TransparentButton>
                <TransparentButton
                    image={require('../../icons/icon_notification_dark_grey.png')}></TransparentButton>
                <TransparentButton
                    image={require('../../icons/icon_more_dark_grey.png')}></TransparentButton>
                <div style={{width:'10px'}}></div>
            </div>
        )
    }   
}