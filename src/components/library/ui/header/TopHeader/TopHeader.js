import './TopHeader.css';
import TopNavMenuBar from '../../nav/TopNavMenuBar/TopNavMenuBar';
import HeaderSearchInput from '../HeaderSearchInput/HeaderSearchInput';

export default function TopHeader(props) {
    return (
        <div className="top-header-container">
            <div className='top-header-left-container'>
                <img className='top-header-logo' src={require('../../images/OruumLogo/logo_oruum.png')}></img>
                <div className='top-header-left-divider' style={{minWidth:'20px'}}></div>
                <HeaderSearchInput></HeaderSearchInput>
            </div>
            <div className='top-header-nav-menu-bar-container'>
                <TopNavMenuBar></TopNavMenuBar>
            </div>
            <div className='top-header-right-container'>
                <div style={{minWidth:'0px'}}></div>
                <button className='top-header-circle-button'>
                    <img className='top-header-circle-button-image' src={require('../../images/Icon/icon_notification_dark_grey.png')}></img>
                </button>
                <button className='top-header-circle-button'>
                    <img className='top-header-circle-button-image' src={require('../../images/Icon/icon_more_dark_grey.png')}></img>
                </button>
                <div style={{minWidth:'20px'}}></div>
            </div>            
        </div>
    )
}