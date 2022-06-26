import './Calendar.css';

export default function Calendar(props) {
    const CalndarDayList = props.dayList.map((day,index) => (
        <div className='calendar-day'>
            <button className='calendar-day-button'>
                <span style={{background:'rgba(0,0,0,0)'}}>{day}</span>
            </button>
        </div>
    ))

    return (
        <div>
            <div className="calendar-month-row-container">
                <button className='calendar-month-change-button'>
                    <img className='calendar-month-change-button-image'
                         src={require('../../images/Icon/icon_left_arrow_white.png')}></img>
                </button>
                <div style={{width:'30px'}}></div>
                <h3 className='calendar-month-text'>6월</h3>
                <div style={{width:'30px'}}></div>
                <button className='calendar-month-change-button'>
                    <img className='calendar-month-change-button-image'
                         src={require('../../images/Icon/icon_right_arrow_white.png')}></img>
                </button>
            </div>
            <div style={{height:'20px'}}></div>
            <div className='calendar-container'>
                {CalndarDayList}
            </div>
            
        </div>
    )
}