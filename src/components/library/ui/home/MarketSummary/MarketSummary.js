import PriceRow from "../../unit/PriceRow/PriceRow"

export default function MarketSummary() {
    return (
        <div>
            <h2 style={{color:'#333333',margin:'0'}}>오늘의 지수</h2>
            <div style={{minHeight:'15px'}}></div>
            <PriceRow
                image={require('../../images/Icon/icon_south_korea.png')}
                name='코스피'
                currentValue={2513.1}
                change={15.1}
                changePercentage={1.12}></PriceRow>
            <PriceRow
                image={require('../../images/Icon/icon_south_korea.png')}
                name='코스닥'
                currentValue={799.4}
                change={-24.1}
                changePercentage={-2.93}></PriceRow>
            <PriceRow
                image={require('../../images/Icon/icon_united_states.png')}
                name='나스닥'
                currentValue={11454.4}
                change={136.5}
                changePercentage={1.21}></PriceRow>
            <PriceRow
                image={require('../../images/Icon/icon_united_states.png')}
                name='다우존스'
                currentValue={30666.4}
                change={291.3}
                changePercentage={0.96}></PriceRow>
            <PriceRow
                image={require('../../images/Icon/icon_united_states.png')}
                name='S&P500'
                currentValue={3777.25}
                change={42.27}
                changePercentage={1.13}></PriceRow>
        </div>
    )
}
