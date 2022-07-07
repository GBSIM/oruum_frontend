import './AlarmWindow.css';
import { useSelector } from "react-redux";

export default function AlarmWindow() {
    const {alarmWindowOn} = useSelector(state => state.window);

    if (alarmWindowOn) {
        return (
            <div className='alarm-window'>
                <h3 className='alarm-title'>알림</h3>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }   
}