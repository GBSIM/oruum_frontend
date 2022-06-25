import './StockProfile.css';
import LineGraph from '../../unit/LineGraph/LineGraph';
import { Line } from 'react-chartjs-2';

export default function StockProfile() {
    return (
        <div>
            <div className='stock-profile-spacer-level1 top'></div>
            <div className="stock-profile-row-container">
                <h2 className="stock-profile-korean-name">테슬라</h2>
            </div>
            <div className="stock-profile-row-container">
                <span className="stock-profile-english-name">Tesla, Inc. (TSLA)</span>
            </div>
            <div className='stock-profile-spacer-level2'></div>
            <div className="stock-profile-row-container">
                <img src={require('../../images/StockLogo/logo_tsla.png')} className='stock-profile-icon'></img>
            </div>
            <div className='stock-profile-spacer-level3'></div>
            <div className="stock-profile-row-container">
                <h1 className="stock-profile-current-price">$737.12</h1>
            </div>
            <div className="stock-profile-row-container">
                <h3 className="stock-profile-daily-change">+25.35 (4.75%)</h3>
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
                <StockBasicInfos></StockBasicInfos>
            </div>
            <div className='stock-profile-spacer-level2'></div>
            <div className="stock-profile-row-container">
                <StockFallingPrice fallingPrice='$46.32' fallingPercentage={32.2}></StockFallingPrice>
            </div>

            <div className='stock-profile-spacer-level3'></div>
            

        </div>
    )
}

function PeriodSelector () {
    return (
        <div className='period-button-container'>
            <PeriodButton isOn={false} periodName={'1주'}></PeriodButton>
            <PeriodButton isOn={false} periodName={'1달'}></PeriodButton>
            <PeriodButton isOn={true} periodName={'6달'}></PeriodButton>
            <PeriodButton isOn={false} periodName={'1년'}></PeriodButton>
            <PeriodButton isOn={false} periodName={'5년'}></PeriodButton>
        </div>
    )
}

function PeriodButton(props) {
    if (props.isOn) {
        return (
            <button className='period-button on'>
                {props.periodName}
            </button>
        )
    } else {
        return (
            <button className='period-button off'>
                {props.periodName}
            </button>
        )
    }
}

function StockBasicInfos(props) {
    return (
        <div className='stock-basic-infos-container'>
            <StockBasicInfo title='52주 최고' value={'$1243.49'}></StockBasicInfo>
            <StockBasicInfo title='52주 최저' value={'$620.46'}></StockBasicInfo>
            <StockBasicInfo title='PER' value={'99.61'}></StockBasicInfo>
            <StockBasicInfo title='PSR' value={'24.21'}></StockBasicInfo>
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

function StockPriceMinMax(props) {
    return (
        <div className='stock-price-min-max-container'>
            <div className='stock-price-min-container'>
                <span className='stock-price-min-title'>
                    52주 최저
                </span>
                <h2 className='stock-price-min'>
                    {props.minimumPrice}
                </h2>
            </div>
            <div className='stock-price-max-container'>
                <span className='stock-price-max-title'>
                    52주 최고
                </span>
                <h2 className='stock-price-max'>
                    {props.maximumPrice}
                </h2>
            </div>
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
                <h2 className='stock-falling-price'>{props.fallingPrice}({props.fallingPercentage}$)</h2>
                <div style={{width:'10px'}}></div>
                <span className='stock-falling-price-text'>하락했어요.</span>
            </div>
        </div>
    )
}