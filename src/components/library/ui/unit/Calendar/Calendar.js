import './Calendar.css';
import React, { useState } from 'react';

export default function Calendar(props) {
    let today = new Date();

    const [year, setYear] = useState(today.getFullYear());
    const [month, setMonth] = useState(today.getMonth());
    const firstDateOfMonth = new Date(today.getFullYear(),today.getMonth(),1);
    const [firstDayOfMonth, setFirstDateOfMonth] = useState(firstDateOfMonth.getDay());
    const lastDateOfMonth = new Date(today.getFullYear(),today.getMonth()+1,0).getDate();
    const [activatedDate,setActivatedDate] = useState(today.getDate());

    const [daySpanList, dayList] = getDayList(year,month,activatedDate);

    console.log(dayList);

    const increaseMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
        setActivatedDate(1);
    }
    const decreaseMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
        setActivatedDate(1);
    }

    const CalndarDayList = daySpanList.map((daySpan,index) => (
        <div className='calendar-day' key={index}>
            <button className='calendar-day-button' onClick={() => {setActivatedDate(dayList[index])}}>
                {daySpan}
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
                <div style={{alignItems:'center'}}>
                    <span style={{color: '#B9B9B9'}}>{year}</span>
                    <h3 className='calendar-month-text'>{month+1}월</h3>    
                </div>
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

function getDayList(year,month,activatedDate) {
    const firstDateOfMonth = new Date(year,month,1);
    const firstDayOfMonth = firstDateOfMonth.getDay()
    const lastDateOfMonth = new Date(year,month+1,0).getDate();
    const lastDayOfMonth = new Date(year,month+1,0).getDay();

    let daySpanList = [];
    let dayList = [];
    if (firstDayOfMonth != 0) {
        for (var i = 0; i < firstDayOfMonth; i++) {
            daySpanList.push('');
            dayList.push('');
        }
    }
    for (var i = 1; i <= lastDateOfMonth; i++) {
        if (i === activatedDate) {
            daySpanList.push(<span className='calendar-activated-date'>{i}</span>)
            dayList.push((i));
        } else {
            daySpanList.push(<span className='calendar-day-text'>{i}</span>);
            dayList.push((i));
        }
    }

    if (lastDayOfMonth != 6) {
        for (var i = 0; i < 6-lastDayOfMonth; i++) {
            daySpanList.push('');
            dayList.push('');
        }
    }

    return [daySpanList, dayList];
}