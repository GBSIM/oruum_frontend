import './StockProfile.css';

import { useSelector,useDispatch } from "react-redux";

import PriceProfile from '../../unit/PriceProfile/PriceProfile';

export default function StockProfile() {
    const {koreanName,englishName,ticker,close,unit,
           change,changePercentage,dateArray,closeArray,
           yearHigh,yearLow,PER} = useSelector(state => state.stock);

    return (
        <div className='stock-profile'>
            <PriceProfile
                name={koreanName}
                subname={englishName+'('+ticker+')'}
                image={require('../../icons/icon_tsla.png')}
                unit={unit}
                price={close}
                change={change}
                changePercentage={changePercentage}
                dateArray={dateArray}
                priceArray={closeArray}
                plotColor='#9AD8CD'
                summaryTitleList={['52주 최고','52주 최저','PER']}
                summaryValueList={[yearHigh,yearLow,PER]}></PriceProfile>
        </div>
    )
}