import './MobileSearchWindow.css';

import { useSelector } from "react-redux";

export default function MobileSearchWindow() {
    const {searchWindowOn} = useSelector(state => state.window);

    if (searchWindowOn) {
        return (
            <div className='mobile-search-window'>
                
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
}