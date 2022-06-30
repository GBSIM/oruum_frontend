import './EconomyPage.css';
import '../../../default.css';

import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import TopHeader from '../../library/ui/header/TopHeader/TopHeader';
import EconomyCalendar from '../../library/ui/economy/EconomyCalendar/EconomyCalendar';

function EconomyPage() {
    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className="main-contents">
                <div className="main-center-contents">
                    <div className="economy-page-top-space"></div>
                    <div className="unit-box economy-top">
                        <EconomyCalendar></EconomyCalendar>
                    </div>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}

export default EconomyPage;