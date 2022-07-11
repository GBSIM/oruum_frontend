import './Stock.css';

import { useDispatch } from "react-redux";

import { closeAllWindows } from '../../../_reducers/window';

import DesktopHeader from '../../library/ui/header/DesktopHeader/DesktopHeader';
import MobileHeader from '../../library/ui/header/MobileHeader/MobileHeader';
import MobileFooter from '../../library/ui/footer/MobileFooter/MobileFooter';
import StockProfile from '../../library/ui/stock/StockProfile/StockProfile';

export default function Stock() {
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
                    <StockProfile></StockProfile>
                </div>
                <div className='content-box top'>
                    <StockProfile></StockProfile>
                </div>
            </div>
            <MobileFooter></MobileFooter>
            <div className='sub-contents-right'>
                
            </div>
        </div>
    )
}