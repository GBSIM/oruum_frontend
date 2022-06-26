import './PersonalTrading.css';
import Calendar from '../../unit/Calendar/Calendar';

export default function PersonalTrading() {
    return (
        <div>
            <div style={{height:'15px'}}></div>
            <div className='personal-trading-row-container'>
                <img 
                    src={require('../../images/image/image_profile.png')}
                    className='personal-asset-profile-image'></img>
            </div>
            <div style={{height:'5px'}}></div>
            <div className='personal-asset-row-container'>
                <h3 style={{margin:0,color:'#696969'}}>지원</h3>  
            </div>
            <div style={{height:'5px'}}></div>
            <div className='personal-trading-row-text-container'>
                <div>
                    <h3 style={{margin:'0',color:'#696969'}}>지원님이 보유한 테슬라 주식은?</h3>
                    <div style={{height:'10px'}}></div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',columnGap:'10px'}}>
                        <span style={{color:'#B9B9B9'}}>평균매수가</span>
                        <h2 style={{color:'#333333',margin:'0'}}>$510.52</h2>
                    </div>
                    <div style={{height:'5px'}}></div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',columnGap:'10px'}}>
                        <span style={{color:'#B9B9B9'}}>총 주식 수</span>
                        <h2 style={{color:'#333333',margin:'0'}}>18주</h2>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',columnGap:'10px'}}>
                        <span style={{color:'#B9B9B9'}}>투자 수익</span>
                        <h2 style={{color:'#34B199',margin:'0'}}>+$2162.15 (21.6%)</h2>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',columnGap:'10px'}}>
                        <span style={{color:'#B9B9B9'}}>투자 비중</span>
                        <h2 style={{color:'#333333',margin:'0'}}>42.7%</h2>
                    </div>
                </div>
            </div>
            <div style={{height:'20px'}}></div>
            <div className='personal-trading-row-text-container'>
                <div>
                    <h3 style={{margin:'0',color:'#696969'}}>테슬라 주식 거래내역</h3>
                    <div style={{height:'10px'}}></div>
                    <div className='personal-trading-calendar-container'>
                        <Calendar dayList={['','','','1','2','3','4',
                          '5','6','7','8','9','10','11',
                          '12','13','14','15','16','17','18',
                          '19','20','21','22','23','24','25',
                          '26','27','28','29','30','','']}></Calendar>
                    </div>
                    <div>
                        <TradingHistory date='2022-06-01' price={'$810.21'} share={'1'} trading={'매수'}></TradingHistory>
                        <TradingHistory date='2022-06-04' price={'$750.55'} share={'3'} trading={'매수'}></TradingHistory>
                        <TradingHistory date='2022-06-05' price={'$780.29'} share={'2'} trading={'매수'}></TradingHistory>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TradingHistory(props) {
    return (
        <div className='trading-history-container'>
            <span className='trading-history-date'>{props.date}</span>
            <span className='trading-history-price'>{props.price}</span>
            <span className='trading-history-share'>{props.share}주 {props.trading}</span>
        </div>
    )
}