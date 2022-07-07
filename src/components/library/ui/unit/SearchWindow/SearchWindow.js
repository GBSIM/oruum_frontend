import './SearchWindow.css';

import { useSelector } from "react-redux";

export default function SearchWindow() {
    const {searchWindowOn} = useSelector(state => state.window);

    if (searchWindowOn) {
        return (
            <div className='search-window'>
    
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }   
}