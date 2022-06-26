import './MiniPriceRow.css';

export default function MiniPriceRow(props) {
    const dailyChangePercentageAbsolute = Math.abs(props.dailyChangePercentage);
    let PriceChangeText
    if (props.dailyChange >= 0) {
        PriceChangeText = <span className="mini-price-row-price-daily-change positive">+{props.dailyChange} ({dailyChangePercentageAbsolute}%)</span>
    } else {
        PriceChangeText = <span className="mini-price-row-price-daily-change negative">{props.dailyChange} ({dailyChangePercentageAbsolute}%)</span>
    }
    return (
        <div className="mini-price-row-container">
            <img className="mini-price-row-image" src={props.image}></img>
            <div style={{minWidth:'10px'}}></div>
            <span className="mini-price-row-name">{props.koreanName}</span>
            <div className='mini-price-row-price-container'>
                <span className="mini-price-row-price">{props.currency}{props.price}</span>
                {PriceChangeText}
            </div>
        </div>
    )
}