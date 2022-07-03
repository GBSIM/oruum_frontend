import './EconomyCalendar.css';
import CountrySelector from '../../unit/CountrySelector/CountrySelector';
import Calendar from '../../unit/Calendar/Calendar';
import { useSelector,useDispatch } from "react-redux";
import { changeEconomyCalendarCountry } from '../../../../../_reducers/economy';

export default function EconomyCalendar() {
    const {economyEventKoreaList,economyEventUsList,isEconomyCalendarKorea} = useSelector(state => state.economy);
    const dispatch = useDispatch();
    const economyCalendarCountryClickEvent = () => {
        dispatch(changeEconomyCalendarCountry());
    }
    let economyEventList;
    if (isEconomyCalendarKorea) {
        economyEventList = economyEventKoreaList.map((economyEvent,index) => (
            <EconomyEvent
                name={economyEvent['name']}
                estimate={economyEvent['prediction']}
                real={economyEvent['real']}
                country={economyEvent['country']}
                success={economyEvent['success']}
                key={index}></EconomyEvent>
        ))
    } else {
        economyEventList = economyEventUsList.map((economyEvent,index) => (
            <EconomyEvent
                name={economyEvent['name']}
                estimate={economyEvent['prediction']}
                real={economyEvent['real']}
                country={economyEvent['country']}
                key={index}></EconomyEvent>
        ))
    }

    return (
        <div>
            <h2 style={{color:'#333333',margin:'0'}}>경제 캘린더</h2>
            <div style={{height:'20px'}}></div>
            <Calendar></Calendar>
            <div style={{height:'20px'}}></div>
            <CountrySelector
                isKorea={isEconomyCalendarKorea}
                onClickEvent={economyCalendarCountryClickEvent}></CountrySelector>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',flexDirection:'column',rowGap:'7px'}}>
                {economyEventList}
            </div>
            <div style={{height:'30px'}}></div>
        </div>
    )
}

function EconomyEvent(props) {
    let economyEventImage;
    if (props.country === 'kr') {
        economyEventImage = <img style={{background:'rgba(0,0,0,0)'}} src={require('../../images/Icon/icon_south_korea.png')} className='economy-event-image'></img>
    } else {
        economyEventImage = <img style={{background:'rgba(0,0,0,0)'}} src={require('../../images/Icon/icon_united_states.png')} className='economy-event-image'></img>
    }

    let realValue;
    if (props.success) {
        realValue = <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#34B199'}}>{props.real}%</h3>
    } else {
        realValue = <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#F15E5E'}}>{props.real}%</h3>
    }

    return (
        <button className="economy-event-container">
            {economyEventImage}
            <div style={{minWidth:'10px'}}></div>
            <div style={{background:'rgba(0,0,0,0)'}}>
                <div style={{background:'rgba(0,0,0,0)',display:'flex',flexDirection:'row'}}>
                    <span style={{color:'#696969',background:'rgba(0,0,0,0)'}}>{props.name}</span>
                </div>
                <div style={{background:'rgba(0,0,0,0)',display:'flex',flexDirection:'row',alignItems:'baseline'}}>
                    <span style={{background:'rgba(0,0,0,0)',margin:'0',color:'#B9B9B9'}}>예상</span>
                    <div style={{background:'rgba(0,0,0,0)',minWidth:'5px'}}></div>
                    <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#333333'}}>{props.estimate}%</h3>
                    <div style={{background:'rgba(0,0,0,0)',minWidth:'20px'}}></div>
                    <span style={{background:'rgba(0,0,0,0)',margin:'0',color:'#B9B9B9'}}>발표</span>
                    <div style={{background:'rgba(0,0,0,0)',minWidth:'5px'}}></div>
                    {realValue}
                </div>
            </div>
        </button>
    )
}