import PriceRow from "../../unit/PriceRow/PriceRow"
import CountrySelector from "../../unit/CountrySelector/CountrySelector"
import { useSelector,useDispatch } from "react-redux";
import { changeMarketGainerCountry } from "../../../../../_reducers/home";

export default function MarketGainer() {
    const {marketGainerKoreaList,marketGainerUsList,isMarketGainerKorea} = useSelector(state => state.home);
    const dispatch = useDispatch();
    const marketGainerCountryClickEvent = () => {
        dispatch(changeMarketGainerCountry());
    }

    let marketGainerList;
    if (isMarketGainerKorea) {
        marketGainerList = marketGainerKoreaList.map((marketGainerKorea,index) => (
            <PriceRow
                name={marketGainerKorea['name']}
                currentValue={marketGainerKorea['value']}
                change={marketGainerKorea['dailyChange']}
                changePercentage={marketGainerKorea['dailyChangePercentage']}
                country={marketGainerKorea['country']}
                key={index}></PriceRow>
        ))
    } else {
        marketGainerList = marketGainerUsList.map((marketGainerUs,index) => (
            <PriceRow
                name={marketGainerUs['name']}
                currentValue={marketGainerUs['value']}
                change={marketGainerUs['dailyChange']}
                changePercentage={marketGainerUs['dailyChangePercentage']}
                country={marketGainerUs['country']}
                key={index}></PriceRow>
        ))
    }

    return (
        <div>
            <h2 style={{color:'#333333',margin:'0'}}>오늘 최고의 상승세!</h2>
            <div style={{minHeight:'20px'}}></div>
            <CountrySelector 
                isKorea={isMarketGainerKorea}
                onClickEvent={marketGainerCountryClickEvent}></CountrySelector>
            <div style={{minHeight:'20px'}}></div>
            {marketGainerList}
        </div>
    )
}
