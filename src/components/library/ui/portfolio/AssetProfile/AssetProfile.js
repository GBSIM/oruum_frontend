import './AssetProfile.css';
import LineGraph from '../../unit/LineGraph/LineGraph';
import { useSelector,useDispatch } from "react-redux";
import { changePricePlotPeriod } from '../../../../../_reducers/user';
import PriceRow from '../../unit/PriceRow/PriceRow';

export default function AssetProfile() {
    const {totalAsset,dailyAssetChange,dailyAssetChangePercentage,assetCurrency,
           totalAssetDateArray,totalAssetArray,totalAssetYealyHighest,totalAssetYealyLowest,
           assetYearlyChange,assetYearlyChangePercentage,wonDeposit} = useSelector(state => (state.user));

    let dailyAssetChangeText;
    if (dailyAssetChange >= 0) {
        dailyAssetChangeText = 
        <h3 className="asset-profile-daily-asset-change postiive">
            +{dailyAssetChange.toLocaleString()} ({dailyAssetChangePercentage}%)
        </h3>
    } else {
        dailyAssetChangeText = 
        <h3 className="asset-profile-daily-asset-change negative">
            {dailyAssetChange.toLocaleString()} ({Math.abs(dailyAssetChangePercentage)}%)
        </h3>
    }

    return (
        <div>
            <div className="asset-profile-row-container left">
                <h2 className="asset-profile-title">나의 자산</h2>
            </div>
            <div style={{height:'20px'}}></div>
            <div className="asset-profile-row-container right">
                <span className="asset-profile-subtitle">총 자산</span>
            </div>
            <div className="asset-profile-row-container right">
                <h1 className="asset-profile-total-asset">{assetCurrency}{(totalAsset).toLocaleString()}</h1>
            </div>
            <div className="asset-profile-row-container right">
                {dailyAssetChangeText}
            </div>
            <div style={{height:'40px'}}></div>
            <div className="asset-profile-row-container left">
                <PriceRow
                    country='kr'
                    name='예수금'
                    currentValue ={'₩'+wonDeposit.toLocaleString()}
                    change={'0'}
                    changePercentage={0}></PriceRow>
                <RankBox rank='3rd' ratio={14}></RankBox>
            </div>
            <div style={{height:'10px'}}></div>
            <div className="asset-profile-row-container left">
                <PriceRow
                    country='kr'
                    name='한국주식'
                    currentValue ={'₩'+wonDeposit.toLocaleString()}
                    change={'0'}
                    changePercentage={0}></PriceRow>
                <RankBox rank='1st' ratio={54}></RankBox>
            </div>
            <div style={{height:'10px'}}></div>
            <div className="asset-profile-row-container left">
                <PriceRow
                    country='us'
                    name='미국주식'
                    currentValue ={'₩'+wonDeposit.toLocaleString()}
                    change={'0'}
                    changePercentage={0}></PriceRow>
                <RankBox rank='2st' ratio={32}></RankBox>
            </div>
            <div style={{height:'40px'}}></div>
            <PeriodSelector></PeriodSelector>
            <div className="dollar-profile-row-container">
                <LineGraph
                    xdata={totalAssetDateArray}
                    ydata={totalAssetArray}
                    color='#9AD8CD'></LineGraph>
            </div>
            {/* <div className='asset-profile-spacer-level2'></div> */}
            <div className="asset-profile-row-container center">
                <AssetChange 
                    change={assetYearlyChange} 
                    changePercentage={assetYearlyChangePercentage}
                    unit={assetCurrency}></AssetChange>
            </div>
            <div className='stock-profile-spacer-level3'></div>
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
            <h2 className='asset-change-price high'>{props.unit + props.change.toLocaleString()} ({props.changePercentage}%)</h2>
            <div style={{width:'10px'}}></div>
            <span className='portfolio-change-price-text'>증가했어요.</span>
        </div>
    } else {
        changeText = 
        <div className='asset-change-price-text-container'>
            <h2 className='asset-change-price low'>{props.unit + props.change.toLocaleString()} ({props.changePercentage}%)</h2>
            <div style={{width:'10px'}}></div>
            <span className='asset-change-price-text'>감소했어요.</span>
        </div>
    }


    return (
        <div>
            <div className='asset-change-price-container'>
                <div className='asset-change-price-text-container'>
                    <span className='asset-change-price-text'>총 자산이 지난 1년 간</span>
                </div>
            </div>
            <div className='asset-change-price-container'>
                {changeText}
            </div>
        </div>
        
    )
}

function RankBox(props) {
    return (
        <div className='rank-box-container'>
            <div className='rank-text-container'>{props.rank}</div>
            <div className='ratio-text-container'>{props.ratio}%</div>
        </div>
    )
}