import './TodayMarket.css'

import { useSelector,useDispatch } from "react-redux";

import PriceRow from '../../unit/PriceRow/PriceRow'

export default function TodayMarket() {
    const {marketKorea,marketUS} = useSelector(state => state.home);

    const PriceRowListKorea = marketKorea.map((marketInfo,index) => (
        <PriceRow
            image={require('../../icons/icon_south_korea.png')}
            name={marketInfo["name"]}
            price={marketInfo["price"]}
            change={marketInfo["change"]}
            changePercentage={marketInfo["changePercentage"]}></PriceRow>
    ))
    const PriceRowListUs = marketUS.map((marketInfo,index) => (
        <PriceRow
            image={require('../../icons/icon_united_states.png')}
            name={marketInfo["name"]}
            price={marketInfo["price"]}
            change={marketInfo["change"]}
            changePercentage={marketInfo["changePercentage"]}></PriceRow>
    ))

    return (
        <div className='today-market'>
            <h2 className='content-box-title'>오늘의 지수</h2>
            {PriceRowListKorea}
            {PriceRowListUs}
        </div>
    )
}