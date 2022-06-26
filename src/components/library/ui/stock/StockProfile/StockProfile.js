import './StockProfile.css';
import LineGraph from '../../unit/LineGraph/LineGraph';
import { useSelector,useDispatch } from "react-redux";
import { changePricePlotPeriod } from '../../../../../_reducers/stock';

export default function StockProfile() {
    const {ticker,koreanName,englishName,
           currentPrice,currency,lastDailyChange,lastDailyChangePercentage,
           yearlyHighestPrice,yearlyLowestPrice,
           per,} = useSelector(state => state.stock);

    let lastDailyChangeString;
    if (lastDailyChange >= 0) {
        lastDailyChangeString = '+' + String(lastDailyChange);
    } else {
        lastDailyChangeString = String(lastDailyChange);
    }

    return (
        <div>
            <div className='stock-profile-spacer-level1 top'></div>
            <div className="stock-profile-row-container">
                <h2 className="stock-profile-korean-name">{koreanName}</h2>
            </div>
            <div className="stock-profile-row-container">
                <span className="stock-profile-english-name">{englishName} ({ticker})</span>
            </div>
            <div className='stock-profile-spacer-level2'></div>
            <div className="stock-profile-row-container">
                <img src={require('../../images/StockLogo/logo_tsla.png')} className='stock-profile-icon'></img>
            </div>
            <div className='stock-profile-spacer-level3'></div>
            <div className="stock-profile-row-container">
                <h1 className="stock-profile-current-price">{currency}{currentPrice}</h1>
            </div>
            <div className="stock-profile-row-container">
                <h3 className="stock-profile-daily-change">{lastDailyChangeString} ({lastDailyChangePercentage}%)</h3>
            </div>
            <div className='stock-profile-spacer-level2'></div>
            <div className="stock-profile-row-container">
                <PeriodSelector></PeriodSelector>
            </div>
            <div className="stock-profile-row-container">
                <LineGraph
                    xdata={['2022-06-01','2022-06-02','2022-06-03','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04','2022-06-04',]}
                    ydata={[100,500,200,400,370,380,600,250,350,420]}></LineGraph>
            </div>
            <div className='stock-profile-spacer-level2'></div>
            <div className="stock-profile-row-container">
                <StockBasicInfos
                    currency={currency}
                    yearlyHighestValue={yearlyHighestPrice}
                    yearlyLowestValue={yearlyLowestPrice}
                    per={per}></StockBasicInfos>
            </div>
            <div className='stock-profile-spacer-level2'></div>
            <div className="stock-profile-row-container">
                <StockFallingPrice fallingPrice='$512.32' fallingPercentage={32.2}></StockFallingPrice>
            </div>

            <div className='stock-profile-spacer-level3'></div>
            

        </div>
    )
}

function PeriodSelector () {
    const {plotPeriod} = useSelector(state => state.stock);
    const dispatch = useDispatch();
    const changeTo1Week = () => {
        dispatch(changePricePlotPeriod('1주'));
    }
    const changeTo1Month = () => {
        dispatch(changePricePlotPeriod('1달'));
    }
    const changeTo6Months = () => {
        dispatch(changePricePlotPeriod('6달'));
    }
    const changeTo1Year = () => {
        dispatch(changePricePlotPeriod('1년'));
    }
    const changeTo5Years = () => {
        dispatch(changePricePlotPeriod('5년'));
    }

    return (
        <div className='period-button-container'>
            <PeriodButton isOn={plotPeriod==='1주'} periodName={'1주'} onClickEvent={changeTo1Week}></PeriodButton>
            <PeriodButton isOn={plotPeriod==='1달'} periodName={'1달'} onClickEvent={changeTo1Month}></PeriodButton>
            <PeriodButton isOn={plotPeriod==='6달'} periodName={'6달'} onClickEvent={changeTo6Months}></PeriodButton>
            <PeriodButton isOn={plotPeriod==='1년'} periodName={'1년'} onClickEvent={changeTo1Year}></PeriodButton>
            <PeriodButton isOn={plotPeriod==='5년'} periodName={'5년'} onClickEvent={changeTo5Years}></PeriodButton>
        </div>
    )
}

function PeriodButton(props) {
    if (props.isOn) {
        return (
            <button className='period-button on' >
                {props.periodName}
            </button>
        )
    } else {
        return (
            <button className='period-button off' onClick={props.onClickEvent}>
                {props.periodName}
            </button>
        )
    }
}

function StockBasicInfos(props) {
    return (
        <div className='stock-basic-infos-container'>
            <StockBasicInfo title='52주 최고' value={String(props.currency)+String(props.yearlyHighestValue)}></StockBasicInfo>
            <StockBasicInfo title='52주 최저' value={String(props.currency)+String(props.yearlyLowestValue)}></StockBasicInfo>
            <StockBasicInfo title='PER' value={props.per}></StockBasicInfo>
        </div>
    )
}

function StockBasicInfo(props) {
    return (
        <div className='stock-basic-info-container'>
            <span className='stock-basic-info-title'>{props.title}</span>
            <h3 className='stock-basic-info-value'>{props.value}</h3>
        </div>
    )
}

function StockFallingPrice(props) {
    return (
        <div className='stock-falling-price-container'>
            <div className='stock-falling-price-text-container'>
                <span className='stock-falling-price-text'>최고가 대비</span>
            </div>
            <div style={{width:'10px'}}></div>
            <div className='stock-falling-price-text-container'>
                <h2 className='stock-falling-price'>{props.fallingPrice}({props.fallingPercentage}%)</h2>
                <div style={{width:'10px'}}></div>
                <span className='stock-falling-price-text'>하락했어요.</span>
            </div>
        </div>
    )
}