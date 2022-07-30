import './AlarmWindow.css';
import { useSelector } from "react-redux";

export default function AlarmWindow() {
    const {alarmWindowOn} = useSelector(state => state.window);
    const {alarmList} = useSelector(state => state.user);

    let AlarmRows;
    if (alarmList.length > 0) {
        AlarmRows = alarmList.map((alarm,index) => {
            return (
                <AlarmRow
                    date={alarm.date}
                    content={alarm.content}
                    key={index}></AlarmRow>
            )
        })
    } else {
        AlarmRows = <div className='alarm-none-notification'>알림이 없습니다.</div>
    }

    if (alarmWindowOn) {
        return (
            <div className='alarm-window'>
                <h3 className='alarm-title'>알림</h3>
                {AlarmRows}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }   
}

function AlarmRow(props) {
    return (
        <div className='alarm-row'>
            <div>
                <span className='alarm-date'>{props.date}</span>
            </div>
            <div>
                <span className='alarm-content'>{props.content}</span>
            </div>
        </div>
    )
}