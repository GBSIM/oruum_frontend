import './AssetProfile.css';

import { useSelector } from "react-redux";

import PriceRow from '../../unit/PriceRow/PriceRow';

export default function AssetProfile() {
    const {name, totalAsset, totalAssetChange, totalAssetChangePercentage,
           cash, koreanStock, koreanStockChange, koreanStockChangePercentage,
           usStock, usStockChange, usStockChangePercentage} = useSelector(state => state.user);

    let Change;
    if (totalAssetChange >= 0) {
        Change = <h3 style={{color: '#34B199',margin:'0 20px 0 0'}}>+{totalAssetChange.toLocaleString()}({totalAssetChangePercentage}%)</h3>
    } else {
        Change = <h3 style={{color: '#F15E5E',margin:'0 20px 0 0'}}>+{totalAssetChange.toLocaleString()}({Math.abs(totalAssetChangePercentage)}%)</h3>
    }

    const cashPecentage = cash/totalAsset*100;
    const koreanStockPercentage = koreanStock/totalAsset*100;
    const usStockPercentage = usStock/totalAsset*100; 

    return (
        <div>
            <h2 className='content-box-title'>나의 자산</h2>
            <div style={{height:'20px'}}></div>
            <div className='container-right-align'>
                <span style={{color: '#696969',marginRight:'20px'}}>총 자산</span>
            </div>
            <div className='container-right-align'>
                <h1 style={{color: '#333 ',margin:'0 20px 0 0'}}>{totalAsset.toLocaleString()}원</h1>
            </div>
            <div className='container-right-align'>
                {Change}
            </div>
            <div style={{height:'40px'}}></div>
            <div className='asset-list-container'>
                <PriceRow
                    image={require('../../icons/icon_money_pocket_yellow.png')}
                    name='예수금'
                    price={cash}          
                    changePercentage={0}      
                    unit='원'></PriceRow>
                <PriceRow
                    image={require('../../icons/icon_south_korea.png')}
                    name='한국 주식'
                    price={koreanStock}
                    change={koreanStockChange}
                    changePercentage={koreanStockChangePercentage}
                    unit='원'></PriceRow>
                <PriceRow
                    image={require('../../icons/icon_united_states.png')}
                    name='미국주식'
                    price={usStock}
                    change={usStockChange}
                    changePercentage={usStockChangePercentage}
                    unit='원'></PriceRow>
            </div>
            <div style={{height:'40px'}}></div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',padding:'0 20px 0 20px'}}>
                <PercentageSummary
                    title='예수금'
                    percentage={cashPecentage}
                    color='#9AD8CD'></PercentageSummary>
                <div style={{height:'40px',width:'1px',background:'#B9B9B9'}}></div>
                <PercentageSummary
                    title='한국 주식'
                    percentage={koreanStockPercentage}
                    color='#34B199'></PercentageSummary>
                <div style={{height:'40px',width:'1px',background:'#B9B9B9'}}></div>
                <PercentageSummary
                    title='미국 주식'
                    percentage={usStockPercentage}
                    color='#074B3F'></PercentageSummary>
            </div>

        </div>
    )
}


function PercentageSummary(props) {
    return (
        <div className='percentage-summary'>
            <span style={{color: '#B9B9B9'}}>{props.title}</span>
            <h3 style={{margin:0,color:props.color}}>{props.percentage.toFixed(2)}%</h3>
        </div>
    )
}