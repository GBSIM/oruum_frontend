import './EarningsCalendar.css';
import Calendar from '../../unit/Calendar/Calendar';
import { useSelector,useDispatch } from "react-redux";
import { changeEarningCalendarCountry } from '../../../../../_reducers/home';
import CountrySelector from '../../unit/CountrySelector/CountrySelector';


export default function EarningsCalendar() {
    const {isEarningsCalendarKorea} = useSelector(state => state.home);
    const dispatch = useDispatch();
    const earningsCalendarCountryClickEvent = () => {
        dispatch(changeEarningCalendarCountry());
    }

    return (
        <div>
            <h2 style={{color:'#333333',margin:'0'}}>실적발표 캘린더</h2>
            <div style={{height:'20px'}}></div>
            <Calendar></Calendar>
            <div style={{height:'20px'}}></div>
            <CountrySelector
                isKorea={isEarningsCalendarKorea}
                onClickEvent={earningsCalendarCountryClickEvent}></CountrySelector>
            <div style={{height:'30px'}}></div>
            <div>
                
            </div>
            <div style={{height:'30px'}}></div>
        </div>
    )
}