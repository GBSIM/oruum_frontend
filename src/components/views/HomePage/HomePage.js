import { useSelector, useDispatch } from "react-redux";

import './HomePage.css';
import '../../../default.css';

import TopHeader from "../../library/ui/header/TopHeader/TopHeader";
import PersonalAsset from "../../library/ui/personalContents/PersonalAsset/PersonalAsset";

import BottomNavMenuBar  from "../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar";
import MarketSummary from "../../library/ui/home/MarketSummary/MarketSummary";
import MarketGainer from "../../library/ui/home/MarketGainer/MarketGainer";
import MarketLoser from "../../library/ui/home/MarketLoser/MarketLoser";
import EarningsCalendar from "../../library/ui/home/EarningsCalendar/EarningsCalendar";
import { deactivateStockSearch } from '../../../_reducers/header';

export default function HomePage() {
    const dispatch = useDispatch();
    const stockSearchDeactivation = () => {
        dispatch(deactivateStockSearch());
    }

    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className="main-contents" onClick={stockSearchDeactivation}>
                <div className="main-center-contents">
                    <div className="home-page-top-space"></div>
                    <div className="unit-box home-top">
                        <MarketSummary></MarketSummary>
                    </div>
                    <div style={{minHeight:'20px'}}></div>
                    <div className="unit-box">
                        <MarketGainer></MarketGainer>
                    </div>
                    <div style={{minHeight:'20px'}}></div>
                    <div className="unit-box">
                        <MarketLoser></MarketLoser>
                    </div>
                    <div style={{minHeight:'20px'}}></div>
                    <div className="unit-box">
                        <EarningsCalendar></EarningsCalendar>
                    </div>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
            <div className="main-right-contents">
                    <PersonalAsset></PersonalAsset>
            </div>
        </div>
    )
}