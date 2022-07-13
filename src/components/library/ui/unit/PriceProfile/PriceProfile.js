import './PriceProfile.css';

import LineGraph from '../LineGraph/LineGraph';
import PeriodSelector from '../PeriodSelector/PeriodSelector';

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
            value={props.summaryValueList[index].toLocaleString()}
            key={index}></Summary>
    ))

    let Price;
    if ((props.unit === '$') || (props.unit === '달러') || (props.unit === 'dollar')) {
        Price = <h1 className='price-profile-price'>{props.unit}{props.price.toLocaleString()}</h1>
    } else {
        Price = <h1 className='price-profile-price'>{props.price.toLocaleString()}{props.unit}</h1>
    }

    return (
        <div className='price-profile'>
            <div style={{height:'20px'}}></div>
            <div className='container-center-align'>
                <h2 className='price-profile-name'>{props.name}</h2>
            </div>
            <div className='container-center-align'>
                <span className='price-profile-subname'>{props.subname}</span>
            </div>
            <div style={{height:'20px'}}></div>
            <div className='container-center-align'>
                <img className='price-profile-image'
                     src={props.image}></img>
            </div>
            <div style={{height:'40px'}}></div>
            <div className='container-center-align'>
                {Price}
            </div>
            <div className='container-center-align'>
                {Change}
            </div>
            <div style={{height:'20px'}}></div>
            <div className='container-center-align' style={{paddingLeft:'10px',paddingRight:'10px'}}>
                <PeriodSelector
                    periodList={props.periodList}
                    selectedPeriod={props.selectedPeriod}
                    clickEvent={props.clickEvent}></PeriodSelector>
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