import './DesktopHeader.css';

import DesktopNavBar from '../../unit/DesktopNavBar/DesktopNavBar';

export default function DesktopHeader() {
    return (
        <div className='desktop-header'>
            <div className='desktop-header-left-container'>

            </div>
            <div className='desktop-header-nav-bar-container'>
                <DesktopNavBar></DesktopNavBar>
            </div>
            <div className='desktop-header-right-container'>
                
            </div>
        </div>
    )
}