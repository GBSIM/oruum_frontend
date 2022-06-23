import { useSelector, useDispatch } from "react-redux";

import './HomePage.css';
import '../../../default.css';

import TopHeader from "../../library/ui/header/TopHeader/TopHeader";
import BottomNavMenuBar  from "../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar";
import MarketSummary from "../../library/ui/home/MarketSummary/MarketSummary";


export default function HomePage() {
    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className="main-contents">
                <div className="main-center-contents">
                    <div style={{minHeight:'20px'}}></div>
                    <div className="unit-box">
                        <MarketSummary></MarketSummary>
                    </div>
                </div>
                
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}