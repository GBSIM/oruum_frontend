import './DesktopHeader.css';

import DesktopNavBar from '../../unit/DesktopNavBar/DesktopNavBar';
import SearchInput from '../../unit/SearchInput/SearchInput';

export default function DesktopHeader() {
    return (
        <div className='desktop-header'>
            <div className='desktop-header-left-container'>
                <a href='/'>
                    <img className='desktop-header-logo' src={require('../../logos/logo_oruum.png')}></img>
                </a>
                <SearchInput
                    placeholder='종목을 검색하세요!'></SearchInput>
            </div>
            <div className='desktop-header-nav-bar-container'>
                <DesktopNavBar></DesktopNavBar>
            </div>
            <div className='desktop-header-right-container'>
                
            </div> 
        </div>
    )
}