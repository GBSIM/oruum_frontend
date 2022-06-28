import './PersonalAsset.css';
import MiniPriceRow from '../../unit/MiniPriceRow/MiniPriceRow';
import { useSelector,useDispatch } from "react-redux";


export default function PersonalAsset() {
    const {currency} = useSelector(state => state.stock);
    const {name,assetCurrency,totalAsset,
           dailyAssetChange,dailyAssetChangePercentage} = useSelector(state => state.user);
        
    let dailyAssetChangeString;
    if (dailyAssetChange >= 0) {
        dailyAssetChangeString = '+' + dailyAssetChange.toLocaleString();
    } else {
        dailyAssetChangeString = dailyAssetChange.toLocaleString();
    }

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
                <h3 style={{margin:0,color:'#696969'}}>{name}</h3>  
            </div>
            <div style={{height:'5px'}}></div>
            <div className='personal-asset-row-container'>
                <span style={{margin:0,color:'#696969'}}>총 자산</span>  
            </div>
            <div className='personal-asset-row-container'>
                <h2 style={{margin:0,color:'#333333'}}>{assetCurrency}{totalAsset.toLocaleString()}</h2>
            </div>
            <div className='personal-asset-row-container'>
                <span style={{margin:0,fontWeight:'500',color:'#34B199'}}>{dailyAssetChangeString} ({dailyAssetChangePercentage}%)</span>
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
            <div style={{height:'30px'}}></div>
            <div className='personal-asset-row-container portfolio-stock-price'>
                <MiniPriceRow
                    image={require('../../images/StockLogo/logo_aapl.png')}
                    koreanName='애플'
                    price={114.62}
                    dailyChange={1.82}
                    currency={currency}
                    dailyChangePercentage={1.53}></MiniPriceRow>
            </div>
            <div className='personal-asset-row-container portfolio-stock-price'>
                <MiniPriceRow
                    image={require('../../images/StockLogo/logo_tsla.png')}
                    koreanName='테슬라'
                    price={737.12}
                    dailyChange={31.91}
                    currency={currency}
                    dailyChangePercentage={4.52}></MiniPriceRow>
            </div>
            <div className='personal-asset-row-container portfolio-stock-price'>
                <MiniPriceRow
                    image={require('../../images/StockLogo/logo_nvda.png')}
                    koreanName='엔비디아'
                    price={171.26}
                    dailyChange={9.01}
                    currency={currency}
                    dailyChangePercentage={5.55}></MiniPriceRow>
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