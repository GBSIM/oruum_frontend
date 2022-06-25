import './PersonalTrading.css';

export default function PersonalTrading() {
    return (
        <div>
            <div style={{height:'15px'}}></div>
            <div className='personal-asset-row-container'>
                <img 
                    src={require('../../images/image/image_profile.png')}
                    className='personal-asset-profile-image'></img>
            </div>
            <div style={{height:'5px'}}></div>
            <div className='personal-asset-row-container'>
                <h3 style={{margin:0,color:'#696969'}}>지원</h3>  
            </div>
            <div style={{height:'5px'}}></div>
            <div className='personal-asset-row-container'>
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
            
        </div>
    )
}