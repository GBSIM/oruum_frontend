import './MobileHeader.css';

import TransparentButton from '../../unit/TransparentButton/TransparentButton';

export default function MobileHeader() {
    return (
        <div className='mobile-header'>
            <a href='/'>
                <img className='mobile-header-logo' src={require('../../logos/logo_oruum.png')}></img>
            </a>
            <div style={{flex:1}}></div>
            <TransparentButton
                image={require('../../icons/icon_search_dark_grey.png')}></TransparentButton>
            <TransparentButton
                image={require('../../icons/icon_notification_dark_grey.png')}></TransparentButton>
            <TransparentButton
                image={require('../../icons/icon_more_dark_grey.png')}></TransparentButton>
            <div style={{width:'10px'}}></div>
        </div>
    )
}