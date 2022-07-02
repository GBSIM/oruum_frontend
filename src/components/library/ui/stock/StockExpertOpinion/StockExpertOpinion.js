import './StockExpertOpinion.css';
import { useSelector,useDispatch } from "react-redux";


export default function StockExpertOpinion() {
    const {numberStrongBuy,numberBuy,numberHold,numberSell,numberStrongSell} = useSelector(state => state.stock);
    const totalOpinionNumbmer = numberStrongBuy + numberBuy + numberHold + numberSell + numberStrongSell;
    const maximumLength = 100;

    const opinionArray = ['강력매수','매수','중립','매도','강력매도'];
    const opinionNumberArray = [numberStrongBuy,numberBuy,numberHold,numberSell,numberStrongSell];
    const maximumOpinionNumber = Math.max(...opinionNumberArray);
    const maximumOpinionIndex = opinionNumberArray.indexOf(maximumOpinionNumber);
    const maximumOpinion = opinionArray[maximumOpinionIndex];

    let opinionColor;
    if (maximumOpinion === '강력매수') {
        opinionColor = '#074B3F';
    } else if (maximumOpinion === '매수') {
        opinionColor = '#34B199';
    } else if (maximumOpinion === '중립') {
        opinionColor = '#696969';
    } else if (maximumOpinion === '매도') {
        opinionColor = '#F29090';
    } else if (maximumOpinion === '강력매도') {
        opinionColor = '#F15E5E';
    }

    return (
        <div>
            <h3 style={{margin:'0',color:'#333333'}}>전문가들의 매수/매도 의견과 적정주가</h3>
            <div style={{height:'30px'}}></div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%'}}>
                <div className='opinions-container'>
                    <OpinionBar
                        title='강력매수'
                        maximumLength={maximumLength}
                        length={numberStrongBuy/totalOpinionNumbmer*maximumLength}
                        color='#074B3F'
                        number={numberStrongBuy}
                        percentage={(numberStrongBuy/totalOpinionNumbmer*100).toFixed(0)}></OpinionBar>
                    <OpinionBar
                        title='매수'
                        maximumLength={maximumLength}
                        length={numberBuy/totalOpinionNumbmer*maximumLength}
                        color='#34B199'
                        number={numberBuy}
                        percentage={(numberBuy/totalOpinionNumbmer*100).toFixed(0)}></OpinionBar>
                    <OpinionBar
                        title='중립'
                        maximumLength={maximumLength}
                        length={numberHold/totalOpinionNumbmer*maximumLength}
                        color='#696969'
                        number={numberHold}
                        percentage={(numberHold/totalOpinionNumbmer*100).toFixed(0)}></OpinionBar>
                    <OpinionBar
                        title='매도'
                        maximumLength={maximumLength}
                        length={numberSell/totalOpinionNumbmer*maximumLength}
                        color='#F29090'
                        number={numberSell}
                        percentage={(numberSell/totalOpinionNumbmer*100).toFixed(0)}></OpinionBar>
                    <OpinionBar
                        title='강력매도'
                        maximumLength={maximumLength}
                        length={numberStrongSell/totalOpinionNumbmer*maximumLength}
                        color='#F15E5E'
                        number={numberStrongSell}
                        percentage={(numberStrongSell/totalOpinionNumbmer*100).toFixed(0)}></OpinionBar>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',flex:'1'}}>
                    <div className='maximum-opinion-container' style={{background:opinionColor}}>
                        <h2 className='maximum-opinion'>{maximumOpinion}</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

function OpinionBar(props) {
    return (
        <div className='opinion-bar-container'>
            <span className='opinion-title'>{props.title}</span>
            <div className='opinion-bar-frame' style={{width:props.maximumLength}}>
                <div className='opinion-bar' style={{width:props.length,background:props.color}}></div>
            </div>
            <span className='opinion-number' style={{color: props.color}}>{props.number} ({props.percentage}%)</span>
        </div>
    )
}