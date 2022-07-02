import './EconomyPage.css';
import '../../../default.css';

import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import TopHeader from '../../library/ui/header/TopHeader/TopHeader';
import EconomyCalendar from '../../library/ui/economy/EconomyCalendar/EconomyCalendar';
import DollarProfile from '../../library/ui/economy/DollarProfile/DollarProfile';
import PersonalEconomy from '../../library/ui/personalContents/PersonalEconomy/PersonalEconomy';

function EconomyPage() {
    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className="main-contents">
                <div className="main-center-contents">
                    <div className="economy-page-top-space"></div>
                    <div className="unit-box economy-top">
                        <DollarProfile></DollarProfile>
                    </div>
                    <div style={{height:'20px'}}></div>
                    <div className="unit-box economy-top">
                        <EconomyCalendar></EconomyCalendar>
                    </div>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
            <div className="main-right-contents">
                    <PersonalEconomy></PersonalEconomy>
            </div>
        </div>
    )
}

export default EconomyPage;