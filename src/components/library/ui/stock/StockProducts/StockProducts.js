import './StockProducts.css';

export default function StockProducts() {
    return (
        <div>
            <StockProduct
                image={require('../../images/image/image_tesla_car.png')}
                name='차량판매'
                salesRatio={82.0}
                yearlyGrowthPercentage={79}></StockProduct>
            <StockProduct
                image={require('../../images/image/image_service.png')}
                name='서비스 및 기타'
                salesRatio={7.0}
                yearlyGrowthPercentage={65}></StockProduct>
            <StockProduct
                image={require('../../images/image/image_energy.png')}
                name='에너지'
                salesRatio={5.5}
                yearlyGrowthPercentage={40}></StockProduct>
            <StockProduct
                image={require('../../images/image/image_lease.png')}
                name='차량리스'
                salesRatio={3.1}
                yearlyGrowthPercentage={56}></StockProduct>
            <StockProduct
                image={require('../../images/image/image_credit.png')}
                name='전기차 크레딧'
                salesRatio={2.7}
                yearlyGrowthPercentage={-7}></StockProduct>
        </div>
    )
}

function StockProduct(props) {
    let growthPercentageText
    if (props.yearlyGrowthPercentage >= 0) {
        growthPercentageText = <span className="stock-product-information-value" style={{color: '#34B199'}}>+{props.yearlyGrowthPercentage}%</span>
    } else {
        growthPercentageText = <span className="stock-product-information-value" style={{color: '#F15E5E'}}>{props.yearlyGrowthPercentage}%</span>
    }
    return (
        <button className="stock-product-container">
            <img src={props.image} className='stock-product-image'></img>
            <div style={{width:'15px'}}></div>
            <div style={{background:'rgba(0,0,0,0)'}}>
                <div className='stock-product-information-container'>
                    <h3 className="stock-product-name">
                        {props.name}
                    </h3>
                </div>
                <div className="stock-product-information-container">
                    <span className="stock-product-information-title">
                        매출비율
                    </span>
                    <div style={{width:'5px'}}></div>
                    <span className="stock-product-information-value">{props.salesRatio}%</span>
                    <div style={{width:'15px'}}></div>
                    <span className="stock-product-information-title">연성장률</span>
                    <div style={{width:'5px'}}></div>
                    {growthPercentageText}
                </div>
            </div>
        </button>
    )
}