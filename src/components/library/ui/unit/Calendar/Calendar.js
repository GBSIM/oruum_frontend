import './Calendar.css';
import React, { useState } from 'react';

export default function Calendar(props) {
    let today = new Date();

    const [month, setMonth] = useState(today.getMonth());
    const increaseMonth = () => {
        if (month === 11) {
            setMonth(0);
        } else {
            setMonth(month + 1);
        }
    }
    const decreaseMonth = () => {
        if (month === 0) {
            setMonth(11);
        } else {
            setMonth(month - 1);
        }
    }

    const CalndarDayList = props.dayList.map((day,index) => (
        <div className='calendar-day' key={index}>
            <button className='calendar-day-button'>
                <span className='calendar-day-text'>{day}</span>
            </button>
        </div>
    ))

    return (
        <div>
            <div className="calendar-month-row-container">
                <button className='calendar-month-change-button' onClick={decreaseMonth}>
                    <img className='calendar-month-change-button-image'
                         src={require('../../images/Icon/icon_left_arrow_white.png')}></img>
                </button>
                <div style={{width:'30px'}}></div>
                <h3 className='calendar-month-text'>{month+1}월</h3>
                <div style={{width:'30px'}}></div>
                <button className='calendar-month-change-button' onClick={increaseMonth}>
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