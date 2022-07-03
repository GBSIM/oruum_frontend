import PriceRow from "../../unit/PriceRow/PriceRow"
import CountrySelector from "../../unit/CountrySelector/CountrySelector"
import { useSelector,useDispatch } from "react-redux";
import { changeMarketLoserCountry } from "../../../../../_reducers/home";

export default function MarketLoser() {
    const {marketLoserKoreaList,marketLoserUsList,isMarketLoserKorea} = useSelector(state => state.home);
    const dispatch = useDispatch();
    const marketLoserCountryClickEvent = () => {
        dispatch(changeMarketLoserCountry());
    }

    let marketLoserList;
    if (isMarketLoserKorea) {
        marketLoserList = marketLoserKoreaList.map((marketLoserKorea,index) => (
            <PriceRow
                name={marketLoserKorea['name']}
                currentValue={marketLoserKorea['value']}
                change={marketLoserKorea['dailyChange']}
                changePercentage={marketLoserKorea['dailyChangePercentage']}
                country={marketLoserKorea['country']}
                key={index}></PriceRow>
        ))
    } else {
        marketLoserList = marketLoserUsList.map((marketLoserUs,index) => (
            <PriceRow
                name={marketLoserUs['name']}
                currentValue={marketLoserUs['value']}
                change={marketLoserUs['dailyChange']}
                changePercentage={marketLoserUs['dailyChangePercentage']}
                country={marketLoserUs['country']}
                key={index}></PriceRow>
        ))
    }

    return (
        <div>
            <h2 style={{color:'#333333',margin:'0'}}>오늘 최고의 하락세</h2>
            <div style={{minHeight:'20px'}}></div>
            <CountrySelector
                isKorea={isMarketLoserKorea}
                onClickEvent={marketLoserCountryClickEvent}></CountrySelector>
            <div style={{minHeight:'20px'}}></div>
            <div style={{display:'flex',flexDirection:'column',rowGap:'7px'}}>
                {marketLoserList}
            </div>
        </div>
    )
}
