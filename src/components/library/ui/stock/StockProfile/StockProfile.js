import './StockProfile.css';

import { useSelector,useDispatch } from "react-redux";
import { changePlotPeriod } from '../../../../../_reducers/stock';

import PriceProfile from '../../unit/PriceProfile/PriceProfile';

export default function StockProfile() {
    const {koreanName,englishName,ticker,close,unit,
           change,changePercentage,dateArray,closeArray,
           yearHigh,yearLow,PER,
           plotPeriod,plotPeriodList} = useSelector(state => state.stock);

    const yearFall = yearHigh - close;

    const dispatch = useDispatch();
    const changePlotPeriodEvent = (period) => {
        dispatch(changePlotPeriod(period));
    }

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
                summaryValueList={[yearHigh,yearLow,PER]}
                selectedPeriod={plotPeriod}
                periodList={plotPeriodList}
                clickEvent={changePlotPeriodEvent}></PriceProfile>
            <div style={{height:'20px'}}></div>
            <div className='stock-profile-below-container'>
                <span className='stock-profile-below-text'>최고가 대비</span>
                <h2 className='stock-profile-below-value'>{unit}{yearFall.toFixed(2)}</h2>
                <span className='stock-profile-below-text'>하락했어요.</span>
            </div>
        </div>
    )
}