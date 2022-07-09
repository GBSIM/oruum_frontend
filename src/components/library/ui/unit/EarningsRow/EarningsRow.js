import './EarningsRow.css';

import { convertNumberToText } from '../../../function/DataConversion';

export default function EarningsRow(props) {
    let revenueRealText;
    if (props.revenueReal >= props.revenueEstimates) {
        revenueRealText = <span className='earnings-row-value-real bull'>실제 {convertNumberToText(props.revenueReal,props.unit)}</span>
    } else {
        revenueRealText = <span className='earnings-row-value-real bear'>실제 {convertNumberToText(props.revenueReal,props.unit)}</span>
    }

    let operatingMarginRealText;
    if (props.operatingMarginReal >= props.operatingMarginEstimates) {
        operatingMarginRealText = <span className='earnings-row-value-real bull'>실제 {convertNumberToText(props.operatingMarginReal,props.unit)}</span>
    } else {
        operatingMarginRealText = <span className='earnings-row-value-real bear'>실제 {convertNumberToText(props.operatingMarginReal,props.unit)}</span>
    }

    return (
        <button className='earnings-row'>
            <img className='earnings-row-image' src={props.image}></img>
            <div>
                <div>
                    <span className='earnings-row-name'>{props.name}</span>
                </div>
                <div>
                    <span className='earnings-row-ticker'>{props.ticker}</span>
                </div>
            </div>
            <div style={{flex:1}}></div>
            <div>
                <div className='earnings-row-value-container'>
                    <span className='earnings-row-value-title'>매출</span>
                    <span className='earnings-row-value-estimates'>예상 {convertNumberToText(props.revenueEstimates,props.unit)}</span>
                    <div className='earnings-row-value-divider'></div>
                    {revenueRealText}
                </div>
                <div className='earnings-row-value-container'>
                    <span className='earnings-row-value-title'>영업이익</span>
                    <span className='earnings-row-value-estimates'>예상 {convertNumberToText(props.operatingMarginEstimates,props.unit)}</span>
                    <div className='earnings-row-value-divider'></div>
                    {operatingMarginRealText}
                </div>
            </div>
        </button>
    )
}