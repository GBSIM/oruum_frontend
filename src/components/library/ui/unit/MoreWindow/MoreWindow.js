import './MoreWindow.css';
import { useSelector } from "react-redux";

export default function MoreWindow() {
    const {moreWindowOn} = useSelector(state => state.window);

    if (moreWindowOn) {
        <div className='more-window'>
            <div className='more-window-login-needed'>로그인이 필요합니다.</div>
        </div>
    } else {
        return (
            <div></div>
        )
    }
}