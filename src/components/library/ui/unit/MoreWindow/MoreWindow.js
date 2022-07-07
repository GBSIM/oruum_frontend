import './MoreWindow.css';
import { useSelector } from "react-redux";

export default function MoreWindow() {
    const {moreWindowOn} = useSelector(state => state.window);

    if (moreWindowOn) {
        return (
            <div className='more-window'>
    
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}