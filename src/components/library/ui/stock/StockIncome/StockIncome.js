import './StockIncome.css';
import { useSelector,useDispatch } from "react-redux";

export default function StockIncome() {
    const {koreaName} = useSelector(state => state.stock);
    
    return (
        <div>
            <h3 className='stock-income-title'>
                {koreaName}의 매출과 영업이익은 매년 성장 중!
            </h3>
            <div style={{height:'30px'}}></div>
            <div className="stock-income-container">
                <div className='stock-income-graph-4years-ago'>
                    <IncomeBars year='2018' 
                                netIncomeHeight='50px' operatingIncomeHeight='80px' revenueHeight='90px'></IncomeBars>
                </div>
                <div className='stock-income-graph-3years-ago'>
                    <IncomeBars year='2019' 
                                netIncomeHeight='50px' operatingIncomeHeight='80px' revenueHeight='90px'></IncomeBars>
                </div>
                <div className='stock-income-graph-2years-ago'>
                    <IncomeBars year='2020' 
                                netIncomeHeight='50px' operatingIncomeHeight='80px' revenueHeight='90px'></IncomeBars>
                </div>
                <div className='stock-income-graph-1year-ago'>
                    <IncomeBars year='2021' 
                                netIncomeHeight='50px' operatingIncomeHeight='80px' revenueHeight='90px'></IncomeBars>
                </div>
                <div className='stock-income-graph-current'>
                    <IncomeBars year='2022' 
                                netIncomeHeight='50px' operatingIncomeHeight='80px' revenueHeight='90px'></IncomeBars>
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
                    <span className='stock-income-value'>{'200B'}</span>
                </div>
                <div className='stock-income-revenue-3years-ago'>
                    <span className='stock-income-value'>{'200B'}</span>
                </div>
                <div className='stock-income-revenue-2years-ago'>
                    <span className='stock-income-value'>{'200B'}</span>
                </div>
                <div className='stock-income-revenue-1year-ago'>
                    <span className='stock-income-value'>{'200B'}</span>
                </div>
                <div className='stock-income-revenue-current'>
                    <span className='stock-income-value'>{'200B'}</span>
                </div>

                <div className='stock-income-operating-income-4years-ago'>
                    <span className='stock-income-value'>{'100B'}</span>
                </div>
                <div className='stock-income-operating-income-3years-ago'>
                    <span className='stock-income-value'>{'100B'}</span>
                </div>
                <div className='stock-income-operating-income-2years-ago'>
                    <span className='stock-income-value'>{'100B'}</span>
                </div>
                <div className='stock-income-operating-income-1year-ago'>
                    <span className='stock-income-value'>{'100B'}</span>
                </div>
                <div className='stock-income-operating-income-current'>
                    <span className='stock-income-value'>{'100B'}</span>
                </div>

                <div className='stock-income-net-income-4years-ago'>
                    <span className='stock-income-value'>{'50B'}</span>
                </div>
                <div className='stock-income-net-income-3years-ago'>
                    <span className='stock-income-value'>{'50B'}</span>
                </div>
                <div className='stock-income-net-income-2years-ago'>
                    <span className='stock-income-value'>{'50B'}</span>
                </div>
                <div className='stock-income-net-income-1year-ago'>
                    <span className='stock-income-value'>{'50B'}</span>
                </div>
                <div className='stock-income-net-income-current'>
                    <span className='stock-income-value'>{'50B'}</span>
                </div>
            </div>
        </div>
    )
}

function IncomeBars(props) {
    return (
        <div>
            <div className='income-bars-container'>
                <UnitBar color='#9AD8CD' height={props.netIncomeHeight}></UnitBar>
                <UnitBar color='#34B199' height={props.operatingIncomeHeight}></UnitBar>
                <UnitBar color='#074B3F' height={props.revenueHeight}></UnitBar>
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