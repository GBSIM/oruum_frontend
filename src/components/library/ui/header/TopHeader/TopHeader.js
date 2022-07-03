import './TopHeader.css';
import TopNavMenuBar from '../../nav/TopNavMenuBar/TopNavMenuBar';
import HeaderSearchInput from '../HeaderSearchInput/HeaderSearchInput';
import { useSelector,useDispatch } from "react-redux";
import { SearchScreen } from '../HeaderSearchInput/HeaderSearchInput';
import { deactivateStockSearch } from '../../../../../_reducers/header';

export default function TopHeader() {
    const {isStockSearchActivated} = useSelector(state => state.header);
    const dispatch = useDispatch();
    const stockSearchDeactivation = () => {
        dispatch(deactivateStockSearch());
    }

    let topHeaderLeft;
    let topHeaderRight;
    if (isStockSearchActivated) {
        topHeaderLeft = 
        <div className='top-header-left-container'>
            <button className='header-search-back-button' onClick={stockSearchDeactivation}>
                <img className='header-search-back-image' src={require('../../images/Icon/icon_back_dark_grey.png')}></img>
            </button>
            <div className='top-header-left-divider on'></div>
            <HeaderSearchInput></HeaderSearchInput>
        </div>
        topHeaderRight = 
        <div className='top-header-right-container'>
            <div style={{minWidth:'0px'}}></div>
            <button className='top-header-circle-button on'>
                <img className='top-header-circle-button-image' src={require('../../images/Icon/icon_notification_dark_grey.png')}></img>
            </button>   
            <button className='top-header-circle-button on'>
                <img className='top-header-circle-button-image' src={require('../../images/Icon/icon_more_dark_grey.png')}></img>
            </button>
            <button className='top-header-login-button'>
                로그인
            </button>
            <div style={{minWidth:'20px'}}></div>
        </div>
    } else {
        topHeaderLeft = 
        <div className='top-header-left-container'>
            <img className='top-header-logo' src={require('../../images/OruumLogo/logo_oruum.png')}></img>
            <div className='top-header-left-divider off' style={{minWidth:'20px'}}></div>
            <HeaderSearchInput></HeaderSearchInput>
        </div>
        topHeaderRight = 
        <div className='top-header-right-container'>
            <div style={{minWidth:'0px'}}></div>
            <button className='top-header-circle-button'>
                <img className='top-header-circle-button-image' src={require('../../images/Icon/icon_notification_dark_grey.png')}></img>
            </button>   
            <button className='top-header-circle-button'>
                <img className='top-header-circle-button-image' src={require('../../images/Icon/icon_more_dark_grey.png')}></img>
            </button>
            <button className='top-header-login-button'>
                로그인
            </button>
            <div style={{minWidth:'20px'}}></div>
        </div>
    }

    return (
        <div className="top-header-container">
            <SearchScreen></SearchScreen>
            {topHeaderLeft}
            <div className='top-header-nav-menu-bar-container'>
                <TopNavMenuBar></TopNavMenuBar>
            </div>
            {topHeaderRight}
        </div>
    )
}