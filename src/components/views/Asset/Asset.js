import './Asset.css';

import { useDispatch } from "react-redux";

import { closeAllWindows } from '../../../_reducers/window';

import DesktopHeader from '../../library/ui/header/DesktopHeader/DesktopHeader';
import MobileHeader from '../../library/ui/header/MobileHeader/MobileHeader';
import MobileFooter from '../../library/ui/footer/MobileFooter/MobileFooter';
import AssetProfile from '../../library/ui/asset/AssetProfile/AssetProfile';

export default function Asset() {
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
                    <AssetProfile></AssetProfile>
                </div>
                <div style={{height:'20px'}}></div>
                
            </div>
            <MobileFooter></MobileFooter>
        </div>
    )
}