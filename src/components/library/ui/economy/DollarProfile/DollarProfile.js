import './DollarProfile.css';

import { useSelector,useDispatch } from "react-redux";
import { changePlotPeriod } from '../../../../../_reducers/economy';

import PriceProfile from '../../unit/PriceProfile/PriceProfile';

export default function DollarProfile() {
    const {dollarClose,dollarChange,dollarChangePercentage,
           dollarDateArray,dollarCloseArray,
           dollar5YearHigh,dollar5YearLow,dollar5YearAverage,
           plotPeriod,plotPeriodList} = useSelector(state => state.economy);

    const dispatch = useDispatch();
    const changePlotPeriodEvent = (period) => {
        dispatch(changePlotPeriod(period));
    }

    const dollar5YearChange = dollarClose - dollar5YearAverage;

    let Change;
    if (dollar5YearChange >= 0) {
        Change = 
        <div style={{display:'flex',flexDirection:'row',alignItems:'baseline'}}>
            <h2 className='dollar-profile-below-value'>{dollar5YearChange.toFixed(2)}원</h2>
            <span className='dollar-profile-below-text'>&nbsp; 높아요.</span>
        </div>
    } else {
        Change = 
        <div style={{diplay:'flex',fleDirection:'row',alignItems:'baseline'}}>
            <h2 className='dollar-profile-below-value'>{dollar5YearChange}</h2>
            <span className='dollar-profile-below-text'>&nbsp;만큼 낮아요.</span>
        </div>
    }

    return (
        <div className='dollar-profile'>
            <PriceProfile
                name='달러환율'
                subname='USD/KRW'
                unit='원'
                image={require('../../icons/icon_dollar_bright_yellow.png')}
                price={dollarClose}
                change={dollarChange}
                changePercentage={dollarChangePercentage}
                dateArray={dollarDateArray}
                priceArray={dollarCloseArray}
                plotColor='#9AD8CD'
                summaryTitleList={['5년 최고','5년 평균','5년 최저']}
                summaryValueList={[dollar5YearHigh,dollar5YearAverage,dollar5YearLow,]}
                selectedPeriod={plotPeriod}
                periodList={plotPeriodList}
                clickEvent={changePlotPeriodEvent}></PriceProfile>
            <div style={{height:'20px'}}></div>
            <div className='dollar-profile-below-container'>
                <span className='dollar-profile-below-text'>5년 평균 대비</span>
                {Change}
            </div>
        </div>
    )
}