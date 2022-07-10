import './PeriodSelector.css';

export default function PeriodSelector(props) {
    const periodButtonList = props.periodList.map((period,index) => (
        <PeriodButton
            text={period}
            isOn={period === props.selectedPeriod}
            clickEvent={props.clickEvent}
            key={index}></PeriodButton>
    ))

    return (
        <div className='period-selector'>
            {periodButtonList}
        </div>
    )
}

function PeriodButton (props) {
    if (props.isOn) {
        return (
            <button className='period-button on'>
                {props.text}
            </button>
        )
    } else {
        return (
            <button className='period-button off' onClick={() => props.clickEvent(props.text)}>
                {props.text}
            </button>
        )
    }
    
}