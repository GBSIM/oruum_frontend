import './MobileMoreWindow.css';

import { useSelector } from "react-redux";

export default function MobileMoreWindow() {
    const {moreWindowOn} = useSelector(state => state.window);

    if (moreWindowOn) {
        return (
            <div className='mobile-more-window'>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
}