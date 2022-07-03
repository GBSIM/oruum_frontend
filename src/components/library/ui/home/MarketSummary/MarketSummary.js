import PriceRow from "../../unit/PriceRow/PriceRow"
import { useSelector,useDispatch } from "react-redux";

export default function MarketSummary() {
    const {marketIndexList} = useSelector(state => state.home);

    const marketIndexRowList = marketIndexList.map((marketIndex,index) => (
        <PriceRow
            name={marketIndex['name']}
            currentValue={marketIndex['value']}
            change={marketIndex['dailyChange']}
            changePercentage={marketIndex['dailyChangePercentage']}
            country={marketIndex['country']}
            key={index}></PriceRow>
    ))

    return (
        <div>
            <h2 style={{color:'#333333',margin:'0'}}>오늘의 지수</h2>
            <div style={{minHeight:'15px'}}></div>
            <div style={{display:'flex',flexDirection:'column',rowGap:'7px'}}>
                {marketIndexRowList}
            </div>
            <div style={{minHeight:'50px'}}></div>
        </div>
    )
}
