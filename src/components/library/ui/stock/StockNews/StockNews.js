import './StockNews.css';

export default function StockNews() {
    return (
        <div>
            <News
                image={require('../../images/image/image_product_example.png')}
                title='애플 MR 헤드셋에 M2 칩 탑재되나'
                journal='조선일보'
                date='2022.06.07'></News>
            <News
                image={require('../../images/image/image_product_example.png')}
                title='애플 MR 헤드셋에 M2 칩 탑재되나'
                journal='조선일보'
                date='2022.06.07'></News>
            <News
                image={require('../../images/image/image_product_example.png')}
                title='애플 MR 헤드셋에 M2 칩 탑재되나'
                journal='조선일보'
                date='2022.06.07'></News>
        </div>
    )
}

function News(props) {
    return (
        <button className="news-container">
            <img src={props.image} className='news-image'></img>
            <div style={{width:'15px'}}></div>
            <div className="news-text-container">
                <h3 className="news-title">{props.title}</h3>
                <div style={{height:'3px'}}></div>
                <div className="news-sub-text-container">
                    <span className="news-sub-text">{props.journal}</span>
                    <div className="news-sub-text-divider"></div>
                    <span className="news-sub-text">{props.date}</span>
                </div>
            </div>
        </button>
    )
}