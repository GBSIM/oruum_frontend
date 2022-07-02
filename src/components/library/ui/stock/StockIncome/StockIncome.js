import './StockIncome.css';
import { useSelector,useDispatch } from "react-redux";
import { convert_Number_to_text } from '../../../function/DataConversion';

export default function StockIncome() {
    const {koreanName,currency,yearlyIncome} = useSelector(state => state.stock);

    let unitInformation;
    if (currency === '$') {
        unitInformation = <span style={{color: '#B9B9B9',fontSize:'14px'}}>단위는 달러이며, B는 billion (1,000,000,000), M은 million (1,000,000) K는 kilo (1,000)을 의미해요.</span>
    } else {
        unitInformation = <span style={{color: '#B9B9B9',fontSize:'14px'}}></span>
    }

    const yearArray = yearlyIncome["date"];
    const revenueArray = yearlyIncome["revenue"];
    const operatingIncomeArray = yearlyIncome["operatingIncome"];
    const netIncomeArray = yearlyIncome["netIncome"];

    const maximumValue = Math.max(Math.max(...revenueArray),Math.max(...operatingIncomeArray),Math.max(...netIncomeArray));

    const maximumIncomeBarHeight = 100;

    return (
        <div>
            <h3 className='stock-income-title'>
                {koreanName}의 매출과 영업이익은 매년 성장 중!
            </h3>
            <div style={{height:'30px'}}></div>
            <div className="stock-income-container">
                <div className='stock-income-graph-4years-ago'>
                    <IncomeBars year={yearArray[0]}
                                netIncomeHeight={netIncomeArray[0]/maximumValue*maximumIncomeBarHeight} 
                                operatingIncomeHeight={operatingIncomeArray[0]/maximumValue*maximumIncomeBarHeight} 
                                revenueHeight={revenueArray[0]/maximumValue*maximumIncomeBarHeight}></IncomeBars>
                </div>
                <div className='stock-income-graph-3years-ago'>
                    <IncomeBars year={yearArray[1]}
                                netIncomeHeight={netIncomeArray[1]/maximumValue*maximumIncomeBarHeight} 
                                operatingIncomeHeight={operatingIncomeArray[1]/maximumValue*maximumIncomeBarHeight} 
                                revenueHeight={revenueArray[1]/maximumValue*maximumIncomeBarHeight}></IncomeBars>
                </div>
                <div className='stock-income-graph-2years-ago'>
                    <IncomeBars year={yearArray[2]}
                                netIncomeHeight={netIncomeArray[2]/maximumValue*maximumIncomeBarHeight} 
                                operatingIncomeHeight={operatingIncomeArray[2]/maximumValue*maximumIncomeBarHeight} 
                                revenueHeight={revenueArray[2]/maximumValue*maximumIncomeBarHeight}></IncomeBars>
                </div>
                <div className='stock-income-graph-1year-ago'>
                    <IncomeBars year={yearArray[3]}
                                netIncomeHeight={netIncomeArray[3]/maximumValue*maximumIncomeBarHeight} 
                                operatingIncomeHeight={operatingIncomeArray[3]/maximumValue*maximumIncomeBarHeight} 
                                revenueHeight={revenueArray[3]/maximumValue*maximumIncomeBarHeight}></IncomeBars>
                </div>
                <div className='stock-income-graph-current'>
                    <IncomeBars year={yearArray[4]}
                                netIncomeHeight={netIncomeArray[4]/maximumValue*maximumIncomeBarHeight} 
                                operatingIncomeHeight={operatingIncomeArray[4]/maximumValue*maximumIncomeBarHeight} 
                                revenueHeight={revenueArray[4]/maximumValue*maximumIncomeBarHeight}></IncomeBars>
                </div>

                <div className='stock-income-header-revenue'>
                    <IncomeBarHeader color='#074B3F' text='매출'></IncomeBarHeader>
                </div>
                <div className='stock-income-divider-1'></div>
                <div className='stock-income-header-operating-income'>
                    <IncomeBarHeader color='#34B199' text='영업이익'></IncomeBarHeader>
                </div>
                <div className='stock-income-divider-2'></div>
                <div className='stock-income-header-net-income'>
                    <IncomeBarHeader color='#9AD8CD' text='순이익'></IncomeBarHeader>
                </div>

                <div className='stock-income-revenue-4years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(revenueArray[0],currency)}</span>
                </div>
                <div className='stock-income-revenue-3years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(revenueArray[1],currency)}</span>
                </div>
                <div className='stock-income-revenue-2years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(revenueArray[2],currency)}</span>
                </div>
                <div className='stock-income-revenue-1year-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(revenueArray[3],currency)}</span>
                </div>
                <div className='stock-income-revenue-current'>
                    <span className='stock-income-value'>{convert_Number_to_text(revenueArray[4],currency)}</span>
                </div>

                <div className='stock-income-operating-income-4years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(operatingIncomeArray[0],currency)}</span>
                </div>
                <div className='stock-income-operating-income-3years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(operatingIncomeArray[1],currency)}</span>
                </div>
                <div className='stock-income-operating-income-2years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(operatingIncomeArray[2],currency)}</span>
                </div>
                <div className='stock-income-operating-income-1year-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(operatingIncomeArray[3],currency)}</span>
                </div>
                <div className='stock-income-operating-income-current'>
                    <span className='stock-income-value'>{convert_Number_to_text(operatingIncomeArray[4],currency)}</span>
                </div>

                <div className='stock-income-net-income-4years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(netIncomeArray[0],currency)}</span>
                </div>
                <div className='stock-income-net-income-3years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(netIncomeArray[1],currency)}</span>
                </div>
                <div className='stock-income-net-income-2years-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(netIncomeArray[2],currency)}</span>
                </div>
                <div className='stock-income-net-income-1year-ago'>
                    <span className='stock-income-value'>{convert_Number_to_text(netIncomeArray[3],currency)}</span>
                </div>
                <div className='stock-income-net-income-current'>
                    <span className='stock-income-value'>{convert_Number_to_text(netIncomeArray[4],currency)}</span>
                </div>
            </div>
            <div style={{height:'30px'}}></div>
            {unitInformation}
        </div>
    )
}

function IncomeBars(props) {
    let netIncomeBar;
    netIncomeBar = <UnitBar color='#9AD8CD' height={String(props.netIncomeHeight)+'px'}></UnitBar>
    if (props.netIncomeHeight >= 0) {
    } else {
        netIncomeBar = <UnitBar color='#F15E5E' height={String(Math.abs(props.netIncomeHeight))+'px'}></UnitBar>
    }
    let operatingIncomeBar;
    if (props.operatingIncomeHeight >= 0) {
        operatingIncomeBar = <UnitBar color='#34B199' height={String(props.operatingIncomeHeight)+'px'}></UnitBar>
    } else {
        operatingIncomeBar = <UnitBar color='#F15E5E' height={String(Math.abs(props.operatingIncomeHeight))+'px'}></UnitBar>
    }
    let revenueBar;
    if (props.revenueHeight >= 0) {
        revenueBar = <UnitBar color='#074B3F' height={String(props.revenueHeight)+'px'}></UnitBar>
    } else {
        revenueBar = <UnitBar color='#F15E5E' height={String(Math.abs(props.revenueHeight))+'px'}></UnitBar>
    }

    return (
        <div style={{flex:'1'}}>
            <div className='income-bars-container'>
                {netIncomeBar}
                {operatingIncomeBar}
                {revenueBar}
            </div>
            <div style={{height:'5px'}}></div>
            <div className='income-bars-year-text-container'>
                <span className='income-bars-year-text'>{props.year}</span>
            </div>
        </div>
        
    )
}

function IncomeBarHeader(props) {
    return (
        <div className='income-bar-header-container'>
            <div className='income-bar-header-bar' style={{background: props.color}}></div>
            <span className='income-bar-header-text'>{props.text}</span>
        </div>
    )
}

function UnitBar(props) {
    return (
        <div className='unit-bar' style={{background:props.color,height:props.height}}>
        </div>
    )
}