import './MobileAlarmWindow.css';
import { useSelector } from "react-redux";

export default function MobileAlarmWindow() {
    const {alarmWindowOn} = useSelector(state => state.window);
    const {alarmList} = useSelector(state => state.user);

    let AlarmRows;
    if (alarmList.length > 0) {
        AlarmRows = alarmList.map((alarm,index) => {
            return (
                <MobileAlarmRow
                    date={alarm.date}
                    content={alarm.content}
                    key={index}></MobileAlarmRow>
            )
        })
    } else {
        AlarmRows = <div className='alarm-none-notification'>알림이 없습니다.</div>
    }

    if (alarmWindowOn) {
        return (
            <div className='mobile-alarm-window'>
                <h1 className='mobile-alarm-title'>알림</h1>
                {AlarmRows}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }    
}

function MobileAlarmRow(props) {
    return (
        <div className='mobile-alarm-row'>
            <div>
                <span className='mobile-alarm-date'>{props.date}</span>
            </div>
            <div>
                <span className='mobile-alarm-content'>{props.content}</span>
            </div>
        </div>
    )
}