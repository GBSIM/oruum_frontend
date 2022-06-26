import './StockDetail.css';
import StockIncome from '../StockIncome/StockIncome';

export default function StockDetail() {
    return (
        <div>
            <div className="stock-detail-title-container">
                <img className="stock-detail-title-icon"
                     src={require('../../images/Icon/icon_box_oruum_green.png')}></img>
                <h2 className='stock-detail-title'>테슬라의 모든 것</h2>
            </div>
            <div style={{height:'20px'}}></div>
            <StockDetailSelector></StockDetailSelector>
            <div>
                <div style={{height:'15px'}}></div>
                <StockIncome></StockIncome>
            </div>
            <div style={{height:'30px'}}></div>
        </div>
    )
}

function StockDetailSelector() {
    return (
        <div className='stock-detail-selector'>
            <StockDetailSelectButton isOn={false} text='배당금'></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={false} text='제품군'></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={true} text='매출과 영업이익'></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={false} text='뉴스'></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={false} text='전문가 의견'></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={false} text='목표주가'></StockDetailSelectButton>
        </div>
    )
}

function StockDetailSelectButton(props) {
    if (props.isOn) {
        return (
            <button className='stock-detail-select-button on'>
                {props.text}
            </button>
        )
    } else {
        return (
            <button className='stock-detail-select-button off'>
                {props.text}
            </button>
        )
    }
}
