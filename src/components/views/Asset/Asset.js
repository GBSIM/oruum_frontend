import './Asset.css';

import { useDispatch } from "react-redux";

import { closeAllWindows } from '../../../_reducers/window';

import DesktopHeader from '../../library/ui/header/DesktopHeader/DesktopHeader';
import MobileHeader from '../../library/ui/header/MobileHeader/MobileHeader';
import MobileFooter from '../../library/ui/footer/MobileFooter/MobileFooter';

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

            </div>
            <MobileFooter></MobileFooter>
        </div>
    )
}