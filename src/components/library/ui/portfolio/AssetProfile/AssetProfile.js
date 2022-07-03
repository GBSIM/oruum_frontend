import './AssetProfile.css';
import LineGraph from '../../unit/LineGraph/LineGraph';
import { useSelector,useDispatch } from "react-redux";
import { changePricePlotPeriod } from '../../../../../_reducers/user';

export default function AssetProfile() {
    const {totalAsset,dailyAssetChange,dailyAssetChangePercentage,assetCurrency,
           totalAssetDateArray,totalAssetArray,totalAssetYealyHighest,totalAssetYealyLowest,
           assetYearlyChange,assetYearlyChangePercentage} = useSelector(state => (state.user));

    let dailyAssetChangeText;
    if (dailyAssetChange >= 0) {
        dailyAssetChangeText = 
        <h2 className="asset-profile-daily-asset-change postiive">
            +{dailyAssetChange.toLocaleString()} ({dailyAssetChangePercentage})
        </h2>
    } else {
        dailyAssetChangeText = 
        <h2 className="asset-profile-daily-asset-change negative">
            {dailyAssetChange.toLocaleString()} ({Math.abs(dailyAssetChangePercentage)})
        </h2>
    }

    return (
        <div>
            <div className="asset-profile-row-container">
                <h3 className="asset-profile-title">나의 자산</h3>
            </div>
            <div style={{height:'5px'}}></div>
            <div className="asset-profile-row-container">
                <h1 className="asset-profile-total-asset">{assetCurrency}{(totalAsset).toLocaleString()}</h1>
            </div>
            <div className="asset-profile-row-container">
                {dailyAssetChangeText}
            </div>
            <div style={{height:'30px'}}></div>
            <PeriodSelector></PeriodSelector>
            <div className="dollar-profile-row-container">
                <LineGraph
                    xdata={totalAssetDateArray}
                    ydata={totalAssetArray}></LineGraph>
            </div>
            <div className="asset-profile-row-container">
                <AssetBasicInfos
                    yearlyHighest={totalAssetYealyHighest}
                    yearlyLowest={totalAssetYealyLowest}
                    unit={assetCurrency}></AssetBasicInfos>
            </div>
            <div style={{height:'20px'}}></div>
            <div className="asset-profile-row-container">
                <AssetChange 
                    change={assetYearlyChange} 
                    changePercentage={assetYearlyChangePercentage}></AssetChange>
            </div>
        </div>
    )
}

function PeriodSelector () {
    const {plotPeriod} = useSelector(state => state.user);
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

function AssetBasicInfos(props) {
    return (
        <div className='asset-basic-infos-container'>
            <AssetBasicInfo title='1년 최고' value={props.unit + props.yearlyHighest.toLocaleString()}></AssetBasicInfo>
            <AssetBasicInfo title='1년 최저' value={props.unit + props.yearlyLowest.toLocaleString()}></AssetBasicInfo>
        </div>
    )
}

function AssetBasicInfo(props) {
    return (
        <div className='asset-basic-info-container'>
            <span className='asset-basic-info-title'>{props.title}</span>
            <h3 className='asset-basic-info-value'>{props.value}</h3>
        </div>
    )
}

function AssetChange(props) {
    let changeText;
    if (props.change >= 0) {
        changeText = 
        <div className='asset-change-price-text-container'>
            <h2 className='asset-change-price high'>+{props.change} ({props.changePercentage}%)</h2>
            <div style={{width:'10px'}}></div>
            <span className='portfolio-change-price-text'>증가했어요.</span>
        </div>
    } else {
        changeText = 
        <div className='asset-change-price-text-container'>
            <h2 className='asset-change-price low'>{props.change} ({props.changePercentage}%)</h2>
            <div style={{width:'10px'}}></div>
            <span className='asset-change-price-text'>감소했어요.</span>
        </div>
    }


    return (
        <div className='asset-change-price-container'>
            <div className='asset-change-price-text-container'>
                <span className='asset-change-price-text'>지난 1년 간</span>
            </div>
            <div style={{width:'10px'}}></div>
            {changeText}
        </div>
    )
}