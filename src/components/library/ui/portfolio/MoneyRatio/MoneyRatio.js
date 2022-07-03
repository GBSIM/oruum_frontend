import './MoneyRatio.css';
import { useSelector,useDispatch } from "react-redux";
import { changeMoneyRatioPlotPeriod } from '../../../../../_reducers/user';
import LineGraph from '../../unit/LineGraph/LineGraph';

export default function MoneyRatio() {
    const {wonDeposit,depositRatio,stockEvaluation,stockRatio,
           moneyRatioArray,moneyRatioDateArray,
           depositRatio1YearHighet,depositRatio1YearAverage,depositRatio1YearLowest} = useSelector(state => (state.user));

    return (
        <div>
            <h2 className='money-ratio-title'>현금 비율 조절하기</h2>
            <div style={{height:'25px'}}></div>
            <RatioBar
                title='현금'
                color='#EBB00C'
                unit='₩'
                value={wonDeposit}
                ratio={depositRatio}></RatioBar>
            <div style={{height:'15px'}}></div>
            <RatioBar
                title='주식'
                color='#074B3F'
                unit='₩'
                value={stockEvaluation}
                ratio={stockRatio}></RatioBar>
            <div style={{height:'50px'}}></div>
            <PeriodSelector></PeriodSelector>
            <div className="money-ratio-row-container">
                <LineGraph
                    xdata={moneyRatioDateArray}
                    ydata={moneyRatioArray}
                    color='#F3CF6D'></LineGraph>
            </div>
            <div style={{height:'30px'}}></div>
            <div className='money-ratio-row-container'>
                <MoneyRatioBasicInfos
                    year1Highest={depositRatio1YearHighet}
                    year1Average={depositRatio1YearAverage}
                    year1Lowest={depositRatio1YearLowest}></MoneyRatioBasicInfos>   
            </div>
            <div style={{height:'30px'}}></div>
            <div className='money-ratio-row-container'>
                <span className='money-ratio-suggestion'>현금 비중을 조절해서 투자자산을 보호하세요.</span>
            </div>
            <div style={{height:'50px'}}></div>
        </div>
    )
}

function RatioBar(props) {
    return (
        <div className='ratio-bar-container'>
            <span className='ratio-bar-title'>{props.title}</span>
            <div className='ratio-bar-frame'>
                <div className='ratio-bar' style={{background: props.color, width: props.ratio/100*150}}></div>
            </div>
            <div style={{flex:'1'}}></div>
            <span className='ratio-value' style={{color:props.color}}>
                {props.unit}{props.value.toLocaleString()} ({props.ratio}%)
            </span>
        </div>
    )
}


function PeriodSelector () {
    const {moenyRatioPlotPeriod} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const changeTo1Week = () => {
        dispatch(changeMoneyRatioPlotPeriod('1주'));
    }
    const changeTo1Month = () => {
        dispatch(changeMoneyRatioPlotPeriod('1달'));
    }
    const changeTo6Months = () => {
        dispatch(changeMoneyRatioPlotPeriod('6달'));
    }
    const changeTo1Year = () => {
        dispatch(changeMoneyRatioPlotPeriod('1년'));
    }
    const changeTo5Years = () => {
        dispatch(changeMoneyRatioPlotPeriod('5년'));
    }

    return (
        <div className='period-button-container'>
            <PeriodButton isOn={moenyRatioPlotPeriod==='1주'} periodName={'1주'} onClickEvent={changeTo1Week}></PeriodButton>
            <PeriodButton isOn={moenyRatioPlotPeriod==='1달'} periodName={'1달'} onClickEvent={changeTo1Month}></PeriodButton>
            <PeriodButton isOn={moenyRatioPlotPeriod==='6달'} periodName={'6달'} onClickEvent={changeTo6Months}></PeriodButton>
            <PeriodButton isOn={moenyRatioPlotPeriod==='1년'} periodName={'1년'} onClickEvent={changeTo1Year}></PeriodButton>
            <PeriodButton isOn={moenyRatioPlotPeriod==='5년'} periodName={'5년'} onClickEvent={changeTo5Years}></PeriodButton>
        </div>
    )
}

function PeriodButton(props) {
    if (props.isOn) {
        return (
            <button className='period-button on' style={{background:'#EBB00C'}}>
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


function MoneyRatioBasicInfos(props) {
    return (
        <div className='money-ratio-basic-infos-container'>
            <MoneyRatioBasicInfo title='1년 최고' value={props.year1Highest.toFixed(2)}></MoneyRatioBasicInfo>
            <MoneyRatioBasicInfo title='1년 평균' value={props.year1Average.toFixed(2)}></MoneyRatioBasicInfo>
            <MoneyRatioBasicInfo title='1년 최저' value={props.year1Lowest.toFixed(2)}></MoneyRatioBasicInfo>
        </div>
    )
}

function MoneyRatioBasicInfo(props) {
    return (
        <div className='money-ratio-basic-info-container'>
            <span className='money-ratio-basic-info-title'>{props.title}</span>
            <h3 className='money-ratio-basic-info-value'>{props.value}%</h3>
        </div>
    )
}

