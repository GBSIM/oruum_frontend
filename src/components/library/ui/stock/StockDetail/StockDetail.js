import './StockDetail.css';
import StockIncome from '../StockIncome/StockIncome';
import { useSelector,useDispatch } from "react-redux";
import { changeDetailMenu } from '../../../../../_reducers/stock';

export default function StockDetail() {
    const {koreaName} = useSelector(state => state.stock);

    return (
        <div>
            <div className="stock-detail-title-container">
                <img className="stock-detail-title-icon"
                     src={require('../../images/Icon/icon_box_oruum_green.png')}></img>
                <h2 className='stock-detail-title'>{koreaName}의 모든 것</h2>
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
    const {detailStockMenu} = useSelector(state => state.stock);
    const dispatch = useDispatch();
    const changeDetailMenuToDividend = () => {
        dispatch(changeDetailMenu('배당금'));
    }
    const changeDetailMenuToProducts = () => {
        dispatch(changeDetailMenu('제품군'));
    }
    const changeDetailMenuToIncome = () => {
        dispatch(changeDetailMenu('매출과 영업이익'));
    }
    const changeDetailMenuToNews = () => {
        dispatch(changeDetailMenu('뉴스'));
    }
    const changeDetailMenuToExpert = () => {
        dispatch(changeDetailMenu('전문가 의견'));
    }
    const changeDetailMenuToTargetPrice = () => {
        dispatch(changeDetailMenu('목표주가'));
    }

    return (
        <div className='stock-detail-selector'>
            <StockDetailSelectButton isOn={detailStockMenu==='배당금'} text='배당금' 
                                     onClickEvent={changeDetailMenuToDividend}></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={detailStockMenu==='제품군'} text='제품군' 
                                     onClickEvent={changeDetailMenuToProducts}></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={detailStockMenu==='매출과 영업이익'} text='매출과 영업이익' 
                                     onClickEvent={changeDetailMenuToIncome}></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={detailStockMenu==='뉴스'} text='뉴스' 
                                     onClickEvent={changeDetailMenuToNews}></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={detailStockMenu==='전문가 의견'} text='전문가 의견' 
                                     onClickEvent={changeDetailMenuToExpert}></StockDetailSelectButton>
            <div style={{minWidth:'10px'}}></div>
            <StockDetailSelectButton isOn={detailStockMenu==='목표주가'} text='목표주가'
                                     onClickEvent={changeDetailMenuToTargetPrice}></StockDetailSelectButton>
        </div>
    )
}

function StockDetailSelectButton(props) {
    if (props.isOn) {
        return (
            <button className='stock-detail-select-button on' onClick={props.onClickEvent}>
                {props.text}
            </button>
        )
    } else {
        return (
            <button className='stock-detail-select-button off' onClick={props.onClickEvent}>
                {props.text}
            </button>
        )
    }
}
