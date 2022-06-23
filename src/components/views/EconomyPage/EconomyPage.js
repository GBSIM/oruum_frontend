import './EconomyPage.css';
import '../../../default.css';

import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import TopHeader from '../../library/ui/header/TopHeader/TopHeader';

function EconomyPage() {
    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className="main-contents">

            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}

export default EconomyPage;