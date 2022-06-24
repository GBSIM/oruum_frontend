import PriceRow from "../../unit/PriceRow/PriceRow"
import CountrySelector from "../../unit/CountrySelector/CountrySelector"

export default function MarketGainer() {
    return (
        <div>
            <h3 style={{color:'#333333',margin:'0'}}>오늘 최고의 상승세!</h3>
            <div style={{minHeight:'20px'}}></div>
            <CountrySelector></CountrySelector>
            <div style={{minHeight:'20px'}}></div>
            <PriceRow
                image={require('../../images/Icon/icon_south_korea.png')}
                name='LG에너지솔루션'
                currentValue={2513.1}
                change={15.1}
                changePercentage={1.12}></PriceRow>
            <PriceRow
                image={require('../../images/Icon/icon_south_korea.png')}
                name='삼성전자'
                currentValue={799.4}
                change={-24.1}
                changePercentage={-2.93}></PriceRow>
            <PriceRow
                image={require('../../images/Icon/icon_south_korea.png')}
                name='바텍'
                currentValue={11454.4}
                change={136.5}
                changePercentage={1.21}></PriceRow>
            <PriceRow
                image={require('../../images/Icon/icon_south_korea.png')}
                name='하이브'
                currentValue={30666.4}
                change={291.3}
                changePercentage={0.96}></PriceRow>
            <PriceRow
                image={require('../../images/Icon/icon_south_korea.png')}
                name='현대차'
                currentValue={3777.25}
                change={42.27}
                changePercentage={1.13}></PriceRow>
        </div>
    )
}
