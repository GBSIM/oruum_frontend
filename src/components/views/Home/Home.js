import './Home.css';

import { useDispatch } from "react-redux";

import { closeAllWindows } from '../../../_reducers/window';

import DesktopHeader from '../../library/ui/header/DesktopHeader/DesktopHeader';
import MobileHeader from '../../library/ui/header/MobileHeader/MobileHeader';
import MobileFooter from '../../library/ui/footer/MobileFooter/MobileFooter';

import TodayMarket from '../../library/ui/home/TodayMarket/TodayMarket';
import Gainer from '../../library/ui/home/Gainer/Gainer';

export default function Home() {
    const dispatch = useDispatch();
    const closeAllWindowsEvent = () => {
        dispatch(closeAllWindows());
    }

    return (
        <div className='page'>
            <DesktopHeader></DesktopHeader>
            <MobileHeader></MobileHeader>
            <div className='main-contents' onClick={closeAllWindowsEvent}>
                <div className='content-box top'>
                    <TodayMarket></TodayMarket>
                </div>
                <div className='content-box'>
                    <Gainer></Gainer>
                </div>
            </div>
            <MobileFooter></MobileFooter>
        </div>
    )
}