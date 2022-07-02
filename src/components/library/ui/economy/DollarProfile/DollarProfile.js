import './DollarProfile.css';
import LineGraph from '../../unit/LineGraph/LineGraph';
import { useSelector,useDispatch } from "react-redux";
import { changePricePlotPeriod } from '../../../../../_reducers/economy';

export default function DollarProfile() {
    const {dollarCurrent,dollarDailyChange,dollarDailyChangePercentage,
           dollar5YearHigh,dollar5YearLow,dollar5YearAverage,
           dollarChangeFrom5YearAverage,dollarChangePercentageFrom5YearAverage,
           dateArray,dollarPriceArray,plotPeriod} = useSelector(state => (state.economy));

    let lastDailyChangeString;
    let dailyPriceInfo;
    let lastDailyChangePercentageString;
    if (dollarDailyChange >= 0) {
        lastDailyChangeString = '+' + String(dollarDailyChange);
        lastDailyChangePercentageString = Math.abs(dollarDailyChangePercentage);
        dailyPriceInfo = <h3 className="dollar-profile-daily-change positive">{lastDailyChangeString} ({lastDailyChangePercentageString}%)</h3>
    } else {
        lastDailyChangeString = String(dollarDailyChange);
        lastDailyChangePercentageString = Math.abs(dollarDailyChangePercentage);
        dailyPriceInfo = <h3 className="dollar-profile-daily-change negative">{lastDailyChangeString} ({lastDailyChangePercentageString}%)</h3>
    }

    return (
        <div>
            <div className='dollar-profile-spacer-level1 top'></div>
            <div className="dollar-profile-row-container">
                <h2 className="dollar-profile-korean-name">달러환율</h2>
            </div>
            <div className="dollar-profile-row-container">
                <span className="dollar-profile-english-name">USD/KRW</span>
            </div>
            <div className='dollar-profile-spacer-level2'></div>
            <div className="dollar-profile-row-container">
                <img src={require('../../images/Icon/icon_dollar_yellow.png')} className='dollar-profile-icon'></img>
            </div>
            <div className='dollar-profile-spacer-level3'></div>
            <div className="dollar-profile-row-container">
                <h1 className="dollar-profile-current-price">{dollarCurrent}</h1>
            </div>
            <div className="dollar-profile-row-container">
               {dailyPriceInfo}
            </div>
            <div className='dollar-profile-spacer-level2'></div>
            <div className="dollar-profile-row-container">
                <PeriodSelector></PeriodSelector>
            </div>
            <div className="dollar-profile-row-container">
                <LineGraph
                    xdata={dateArray}
                    ydata={dollarPriceArray}></LineGraph>
            </div>
            <div className='stock-profile-spacer-level2'></div>
            <div className="stock-profile-row-container">
                <DollarBasicInfos
                    year5Average={dollar5YearAverage}
                    year5Highest={dollar5YearHigh}
                    year5Lowest={dollar5YearLow}></DollarBasicInfos>
            </div>
            <div className='dollar-profile-spacer-level2'></div>
            <div className="dollar-profile-row-container">
                <DollarChangePrice 
                    changePrice={dollarChangeFrom5YearAverage} 
                    changePercentage={dollarChangePercentageFrom5YearAverage}></DollarChangePrice>
            </div>

            <div className='dollar-profile-spacer-level3'></div>
            

        </div>
    )
}

function PeriodSelector () {
    const {plotPeriod} = useSelector(state => state.economy);
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

function DollarBasicInfos(props) {
    return (
        <div className='dollar-basic-infos-container'>
            <DollarBasicInfo title='5년 최고' value={props.year5Highest.toFixed(2)}></DollarBasicInfo>
            <DollarBasicInfo title='5년 평균' value={props.year5Average.toFixed(2)}></DollarBasicInfo>
            <DollarBasicInfo title='5년 최저' value={props.year5Lowest.toFixed(2)}></DollarBasicInfo>
        </div>
    )
}

function DollarBasicInfo(props) {
    return (
        <div className='dollar-basic-info-container'>
            <span className='dollar-basic-info-title'>{props.title}</span>
            <h3 className='dollar-basic-info-value'>{props.value}</h3>
        </div>
    )
}

function DollarChangePrice(props) {
    let changeText;
    if (props.changePrice >= 0) {
        changeText = 
        <div className='dollar-change-price-text-container'>
            <h2 className='dollar-change-price high'>+{props.changePrice} ({props.changePercentage}%)</h2>
            <div style={{width:'10px'}}></div>
            <span className='dollar-change-price-text'>높아요.</span>
        </div>
    } else {
        changeText = 
        <div className='dollar-change-price-text-container'>
            <h2 className='dollar-change-price low'>{props.changePrice} ({props.changePercentage}%)</h2>
            <div style={{width:'10px'}}></div>
            <span className='dollar-change-price-text'>낮아요.</span>
        </div>
    }


    return (
        <div className='dollar-change-price-container'>
            <div className='dollar-change-price-text-container'>
                <span className='dollar-change-price-text'>5년 평균 대비</span>
            </div>
            <div style={{width:'10px'}}></div>
            {changeText}
        </div>
    )
}