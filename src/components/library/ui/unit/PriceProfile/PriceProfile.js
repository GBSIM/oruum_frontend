import './PriceProfile.css';

import LineGraph from '../LineGraph/LineGraph';
import { Line } from 'react-chartjs-2';

export default function PriceProfile(props) {
    let Change;
    if (props.change >= 0) {
        Change = <h3 className='price-profile-change plus'>+{props.change} ({props.changePercentage}%)</h3>
    } else {
        Change = <h3 className='price-profile-change minus'>{props.change} ({Math.abs(props.changePercentage)}%)</h3>
    }

    const SummaryList = props.summaryTitleList.map((summaryTitle,index) => (
        <Summary
            title={summaryTitle}
            value={props.summaryValueList[index].toLocaleString()}></Summary>
    ))

    return (
        <div className='price-profile'>
            <div style={{height:'20px'}}></div>
            <div className='container-center-align'>
                <h2 className='price-profile-name'>{props.name}</h2>
            </div>
            <div className='container-center-align'>
                <h3 className='price-profile-subname'>{props.subname}</h3>
            </div>
            <div style={{height:'20px'}}></div>
            <div className='container-center-align'>
                <img className='price-profile-image'
                     src={props.image}></img>
            </div>
            <div style={{height:'60px'}}></div>
            <div className='container-center-align'>
                <h1 className='price-profile-price'>{props.unit}{props.price.toLocaleString()}</h1>
            </div>
            <div className='container-center-align'>
                {Change}
            </div>
            <div className='container-center-align'>
                <LineGraph
                    xdata={props.dateArray}
                    ydata={props.priceArray}
                    color={props.plotColor}></LineGraph>
            </div>
            <div style={{width:'100%',justifyContent:'space-around',display:'flex',flexDirection:'row'}}>
                {SummaryList}
            </div>
        </div>
    )
}

function Summary(props) {
    return (
        <div>
            <span className='summary-title'>{props.title}</span>
            <h3 className='summary-value'>{props.value}</h3>
        </div>
    )
}