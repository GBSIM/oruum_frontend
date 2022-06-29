import './StockProducts.css';

export default function StockProducts() {
    return (
        <div>
            <StockProduct
                image={require('../../images/image/image_product_example.png')}
                name='아이폰'
                salesRatio={52.4}
                yearlyGrowthPercentage={16.2}></StockProduct>
            <StockProduct
                image={require('../../images/image/image_product_example.png')}
                name='서비스'
                salesRatio={52.4}
                yearlyGrowthPercentage={16.2}></StockProduct>
            <StockProduct
                image={require('../../images/image/image_product_example.png')}
                name='웨어러블기기'
                salesRatio={52.4}
                yearlyGrowthPercentage={16.2}></StockProduct>
            <StockProduct
                image={require('../../images/image/image_product_example.png')}
                name='맥'
                salesRatio={52.4}
                yearlyGrowthPercentage={16.2}></StockProduct>
            <StockProduct
                image={require('../../images/image/image_product_example.png')}
                name='아이패드'
                salesRatio={52.4}
                yearlyGrowthPercentage={16.2}></StockProduct>
        </div>
    )
}

function StockProduct(props) {
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
                    <span className="stock-product-information-value">{props.yearlyGrowthPercentage}%</span>
                </div>
            </div>
        </button>
    )
}