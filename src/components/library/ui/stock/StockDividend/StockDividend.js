import './StockDividend.css';

export default function StockDividend() {
    return (
        <div>
            <h3 style={{margin:'0',color:'#333333'}}>배당금은 매년 늘어나고 있어요!</h3>
            <div style={{height:'30px'}}></div>
            <div className='stock-dividend-container'>
                <div className='stock-dividend-bar-graph-container'>
                    <Dividend></Dividend>
                    <Dividend></Dividend>
                    <Dividend></Dividend>
                    <Dividend></Dividend>
                    <Dividend></Dividend>
                    <Dividend></Dividend>
                </div>
                <div className='stock-dividend-highlight'>
                    <span style={{fontSize:'14px',color:'#696969'}}>최근 배당금</span>
                    <h2 style={{color:'#34B199'}}>$0.22</h2>
                    <div style={{height:'20px'}}></div>
                    <span style={{fontSize:'14px',color:'#696969'}}>배당률</span>
                    <h2 style={{color:'#34B199'}}>0.67%</h2>
                </div>
            </div>
        </div>
    )
}

function Dividend() {
    return (
        <div>
            <div className='stock-dividend-bar' style={{height:'120px'}}></div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <span className='stock-dividend-period-text' style={{marginTop:'5px'}}>2Q</span>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <span className='stock-dividend-period-text' >`21</span>
            </div>
        </div>
    )
}