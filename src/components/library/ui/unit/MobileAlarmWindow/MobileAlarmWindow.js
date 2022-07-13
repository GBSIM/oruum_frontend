import './MobileAlarmWindow.css';

import { useSelector } from "react-redux";

export default function MobileAlarmWindow() {
    const {alarmWindowOn} = useSelector(state => state.window);

    if (alarmWindowOn) {
        return (
            <div className='mobile-alarm-window'>
                <h1 className='mobile-alarm-title'>알림</h1>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
    
}