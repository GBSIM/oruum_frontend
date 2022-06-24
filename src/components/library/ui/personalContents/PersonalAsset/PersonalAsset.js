import './PersonalAsset.css';

export default function PersonalAsset() {
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
                <span style={{margin:0,color:'#696969'}}>총 자산</span>  
            </div>
            <div className='personal-asset-row-container'>
                <h2 style={{margin:0,color:'#333333'}}>￦541,571,580</h2>
            </div>
            <div className='personal-asset-row-container'>
                <span style={{margin:0,fontWeight:'500',color:'#34B199'}}>+3,015,152 (+1.51%)</span>
            </div>
            <div style={{height:'15px'}}></div>
            <div className='personal-asset-row-container'>
                <div className='personal-asset-stock-hold-container'>
                    <StockHolderBar
                        image={require('../../images/StockLogo/logo_aapl.png')}></StockHolderBar>
                    <StockHolderBar
                        image={require('../../images/StockLogo/logo_tsla.png')}></StockHolderBar>
                    <StockHolderBar
                        image={require('../../images/StockLogo/logo_nvda.png')}></StockHolderBar>
                    <StockHolderBar
                        image={require('../../images/StockLogo/logo_005930.png')}></StockHolderBar>
                    <StockHolderBar
                        image={require('../../images/StockLogo/logo_ko.png')}></StockHolderBar>
                </div>
                
            </div>
        </div>
    )
}

function StockHolderBar(props) {
    return (
        <div>
            <div className='personal-asset-stock-hold-container'>
                <img
                    src={props.image}
                    className='stock-holder-bar-image'></img>
            </div>
            <div style={{height:'10px'}}></div>
            <div className='stock-holder-bar'></div>
            <div style={{height:'5px'}}></div>
            <div className='personal-asset-stock-hold-container'>
                <span style={{fontSize:'12px'}}>33%</span>
            </div>
        </div>
    )
}