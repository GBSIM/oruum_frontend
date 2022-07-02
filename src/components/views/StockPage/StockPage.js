import './StockPage.css';
import '../../../default.css';
import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import TopHeader from '../../library/ui/header/TopHeader/TopHeader';

import StockProfile from '../../library/ui/stock/StockProfile/StockProfile';
import StockCheckPoint from '../../library/ui/stock/StockCheckPoint/StockCheckPoint';
import StockDetail from '../../library/ui/stock/StockDetail/StockDetail';

import PersonalTrading from '../../library/ui/personalContents/PersonalTrading/PersonalTrading';
import { useSelector,useDispatch } from "react-redux";
import { deactivateStockSearch } from '../../../_reducers/header';

export default function StockPage() {
    const dispatch = useDispatch();
    const stockSearchDeactivation = () => {
        dispatch(deactivateStockSearch());
    }

    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className='main-contents' onClick={stockSearchDeactivation}>
                <div className='main-center-contents'>
                    <div className='stock-page-top-space'></div>
                    <div className="unit-box stock-profile">
                        <StockProfile></StockProfile>
                    </div>
                    <div style={{height:'20px'}}></div>
                    <div className="unit-box">
                        <StockCheckPoint></StockCheckPoint>
                    </div>
                    <div style={{height:'20px'}}></div>
                    <div className="unit-box">
                        <StockDetail></StockDetail>
                    </div>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
            <div className="main-right-contents">
                <PersonalTrading></PersonalTrading>
            </div>            
        </div>
    )
}