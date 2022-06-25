import './StockPage.css';
import '../../../default.css';
import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import TopHeader from '../../library/ui/header/TopHeader/TopHeader';

import StockProfile from '../../library/ui/stock/StockProfile/StockProfile';

export default function StockPage() {
    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className='main-contents'>
                <div className='main-center-contents'>
                    <div className='stock-page-top-space'></div>
                    <div className="unit-box stock-profile">
                        <StockProfile></StockProfile>
                    </div>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
            
        </div>
    )
}