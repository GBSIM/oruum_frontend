import './StockDividend.css';

export default function StockDividend() {
    return (
        <div>
            <h3 style={{margin:'0',color:'#333333'}}>테슬라의 배당금은 아직!</h3>
            <div style={{height:'30px'}}></div>
            <div className='stock-dividend-container'>
                <span className='stock-dividend-text'>테슬라는 아직 배당금을 지급하지 않아요.</span>
                <span className='stock-dividend-text'>배당금을 지급하면 알려드릴게요!</span>
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