import './PersonalEconomy.css';
import { useSelector,useDispatch } from "react-redux";

export default function PersonalEconomy() {
    const {currency} = useSelector(state => state.stock);
    const {dollarEvaluation,dollarDeposit,dollarAverageExchangeRate,
           dollarExchangeProfit,dollarExchnageProfitPecentage} = useSelector(state => state.user);
    let dollarProfitText;

    if (dollarExchangeProfit >= 0) {
        dollarProfitText = <h3 style={{color:'#34B199',margin:'0'}}>
        {(dollarExchangeProfit).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2})} ({Math.abs(dollarExchnageProfitPecentage)}%)</h3>
    } else {
        dollarProfitText = <h3 style={{color:'#F15E5E',margin:'0'}}>
        {(dollarExchangeProfit).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2})} ({Math.abs(dollarExchnageProfitPecentage)}%)</h3>
    }

    return (
        <div>
            <div style={{height:'15px'}}></div>
            <div className='personal-economy-row-container'>
                <img 
                    src={require('../../images/image/image_profile.png')}
                    className='personal-economy-profile-image'></img>
            </div>
            <div style={{height:'5px'}}></div>
            <div className='personal-asset-row-container'>
                <h3 style={{margin:0,color:'#696969'}}>지원</h3>  
            </div>
            <div style={{height:'5px'}}></div>
            <div className='personal-economy-row-text-container'>
                <div>
                    <h3 style={{margin:'0',color:'#696969'}}>지원님이 보유한 달러 자산은?</h3>
                    <div style={{height:'10px'}}></div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',columnGap:'10px'}}>
                        <span style={{color:'#B9B9B9',width:'100px'}}>주식평가액</span>
                        <h3 style={{color:'#333333',margin:'0'}}>
                            ${(dollarEvaluation).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2})}</h3>
                    </div>
                    <div style={{height:'5px'}}></div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',columnGap:'10px'}}>
                        <span style={{color:'#B9B9B9',width:'100px'}}>예수금</span>
                        <h3 style={{color:'#333333',margin:'0'}}>
                            ${(dollarDeposit).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2})}</h3>
                    </div>
                    <div style={{height:'5px'}}></div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',columnGap:'10px'}}>
                        <span style={{color:'#B9B9B9',width:'100px'}}>평균 환전 환율</span>
                        <h3 style={{color:'#333333',margin:'0'}}>
                            ${(dollarAverageExchangeRate).toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2})}</h3>
                    </div>
                    <div style={{height:'5px'}}></div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'baseline',columnGap:'10px'}}>
                        <span style={{color:'#B9B9B9',width:'100px'}}>환차익</span>
                        {dollarProfitText}
                    </div>
                </div>
            </div>
            <div style={{height:'20px'}}></div>
        </div>
    )
}
