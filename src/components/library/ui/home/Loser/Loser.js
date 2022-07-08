import './Loser.css';

import { useSelector,useDispatch } from "react-redux";

import { changeLoserCountry } from '../../../../../_reducers/home';

import CountrySelector from '../../unit/CountrySelector/CountrySelector';
import PriceRow from '../../unit/PriceRow/PriceRow';

export default function Loser() {
    const {isLoserKorea,losersKorea,losersUS} = useSelector(state => state.home);
    const dispatch = useDispatch();
    const changeLoserCountryEvent = () => {
        dispatch(changeLoserCountry());
    }

    let LoserList;
    if (isLoserKorea) {
        LoserList = losersKorea.map((loser,index) => (
            <PriceRow
                image={require('../../icons/icon_south_korea.png')}
                name={loser["name"]}
                price={loser["price"]}
                change={loser["change"]}
                changePercentage={loser["changePercentage"]}
                unit={loser["unit"]}
                key={'loser'+String(index)}></PriceRow>
        ))
    } else {
        LoserList = losersUS.map((loser,index) => (
            <PriceRow
                image={require('../../icons/icon_united_states.png')}
                name={loser["name"]}
                price={loser["price"]}
                change={loser["change"]}
                changePercentage={loser["changePercentage"]}
                unit={loser["unit"]}
                key={'loser'+String(index)}></PriceRow>
        ))
    }

    return (
        <div className='loser'>
            <h2 className='content-box-title'>오늘 최고의 하락세</h2>
            <CountrySelector
                isKorea={isLoserKorea}
                changeCountry={changeLoserCountryEvent}></CountrySelector>
            <div style={{height:'5px'}}></div>
            {LoserList}
        </div>
    )
}