import './PriceRow.css';

export default function PriceRow(props) {
    let currentPrice;
    let priceChange;
    if ((props.unit === '원') || (props.unit === '₩')) {
        currentPrice = <h3 className='price-row-price'>{props.price.toLocaleString()}원</h3>
        if (typeof(props.change) === 'number') {
            if (props.change >= 0) {
                priceChange = <h3 className='price-row-price-change plus'>+{props.change.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })} ({(Math.abs(props.changePercentage.toFixed(2)))}%)</h3>
            } else {
                priceChange = <h3 className='price-row-price-change minus'>{props.change.toLocaleString("en-US", { maximumFractionDigits: 0, minimumFractionDigits: 0 })} ({(Math.abs(props.changePercentage.toFixed(2)))}%)</h3>
            }
        } else {
            priceChange = <div></div>
        }
        
    } else {
        currentPrice = <h3 className='price-row-price'>{props.unit}{props.price.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}</h3>
        if (typeof(props.change) === 'number') {
            if (props.change >= 0) {
                priceChange = <h3 className='price-row-price-change plus'>+{props.change.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} ({(Math.abs(props.changePercentage.toFixed(2)))}%)</h3>
            } else {
                priceChange = <h3 className='price-row-price-change minus'>{props.change.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })} ({(Math.abs(props.changePercentage.toFixed(2)))}%)</h3>
            }
        } else {
            priceChange = <div></div>
        }
        
    }

    return (
        <button className='price-row'>
            <img className='price-row-image' src={props.image}></img>
            <div className='price-row-text-container'>
                <span className='price-row-name'>{props.name}</span>
                <div className='price-row-price-container'>
                    {currentPrice}
                    {priceChange}
                </div>
            </div>
        </button>
    )
}