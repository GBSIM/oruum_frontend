import './Gainer.css';

import { useSelector,useDispatch } from "react-redux";

import { activateGainerKorea, activateGainerUS } from '../../../../../_reducers/home';

import CountrySelector from '../../unit/CountrySelector/CountrySelector';
import PriceRow from '../../unit/PriceRow/PriceRow';

export default function Gainer() {
    const {isGainerKorea,gainersKorea,gainersUS} = useSelector(state => state.home);
    const dispatch = useDispatch();
    const changeCountryToKorea = (nextPage) => {
        dispatch(activateGainerKorea());
    }
    const changeCountryToUS = (nextPage) => {
        dispatch(activateGainerUS());
    }

    let GainerList;
    if (isGainerKorea) {
        GainerList = gainersKorea.map((gainer,index) => (
            <PriceRow
                image={require('../../icons/icon_south_korea.png')}
                name={gainer["name"]}
                price={gainer["price"]}
                change={gainer["change"]}
                changePercentage={gainer["changePercentage"]}
                unit={gainer["unit"]}
                key={'gainer'+String(index)}></PriceRow>
        ))
    } else {
        GainerList = gainersUS.map((gainer,index) => (
            <PriceRow
                image={require('../../icons/icon_united_states.png')}
                name={gainer["name"]}
                price={gainer["price"]}
                change={gainer["change"]}
                changePercentage={gainer["changePercentage"]}
                unit={gainer["unit"]}
                key={'gainer'+String(index)}></PriceRow>
        ))
    }

    return (
        <div className='gainer'>
            <h2 className='content-box-title'>오늘 최고의 상승세</h2>
            <CountrySelector
                isKorea={isGainerKorea}
                activateKorea={changeCountryToKorea}
                activateUS={changeCountryToUS}></CountrySelector>
            <div style={{height:'5px'}}></div>
            {GainerList}
        </div>
    )
}