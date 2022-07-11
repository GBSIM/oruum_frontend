import './EarningsCalendar.css';

import { useSelector,useDispatch } from "react-redux";

import { changeEarningsCalendarCountry } from '../../../../../_reducers/home';
import EarningsRow from '../../unit/EarningsRow/EarningsRow';

import Calendar from '../../unit/Calendar/Calendar';
import CountrySelector from '../../unit/CountrySelector/CountrySelector';

export default function EarningsCalendar() {
    const {isEarningsCalendarKorea} = useSelector(state => state.home);
    const dispatch = useDispatch();
    const changeEarningsCalendarCountryEvent = () => {
        dispatch(changeEarningsCalendarCountry());
    }

    return (
        <div className='earnings-calendar'>
            <h2 className='content-box-title'>실적발표 캘린더</h2>
            <div style={{paddingLeft:'20px',paddingRight:'20px'}}>
                <Calendar></Calendar>
            </div>
            <CountrySelector
                isKorea={isEarningsCalendarKorea}
                changeCountry={changeEarningsCalendarCountryEvent}></CountrySelector>
            <EarningsRow
                image={require('../../icons/icon_005930.png')}
                name='삼성전자'
                ticker='005930'
                revenueEstimates={13201020000000}
                revenueReal={14201020000000}
                operatingMarginEstimates={2105102000000}
                operatingMarginReal={2205102000000}
                unit='원'></EarningsRow>
            <EarningsRow
                image={require('../../icons/icon_005380.png')}
                name='현대차'
                ticker='005380'
                revenueEstimates={13201020000000}
                revenueReal={12201020000000}
                operatingMarginEstimates={2105102000000}
                operatingMarginReal={2005102000000}
                unit='원'></EarningsRow>
        </div>
    )
}