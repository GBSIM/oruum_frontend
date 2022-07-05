import './PriceRow.css';

export default function PriceRow(props) {
    let iconImage;
    if (props.country === 'kr') {
        iconImage = <img style={{background:'rgba(0,0,0,0)'}} src={require('../../images/Icon/icon_south_korea.png')} className='price-row-image'></img>
    } else if (props.country === 'us') {
        iconImage = <img style={{background:'rgba(0,0,0,0)'}} src={require('../../images/Icon/icon_united_states.png')} className='price-row-image'></img>
    } else {
        iconImage = <img style={{background:'rgba(0,0,0,0)'}} src={require('../../images/Icon/icon_south_korea.png')} className='price-row-image'></img>
    }
    
    if (props.change >= 0) {
        return (
            <button className="price-row-container">
                {iconImage}
                <div style={{minWidth:'10px'}}></div>
                <div style={{background:'rgba(0,0,0,0)'}}>
                    <div style={{background:'rgba(0,0,0,0)',display:'flex',flexDirection:'row'}}>
                        <span style={{color:'#696969',background:'rgba(0,0,0,0)'}}>{props.name}</span>
                    </div>
                    <div style={{background:'rgba(0,0,0,0)',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#333333'}}>{props.currentValue.toLocaleString()}</h3>
                        <div style={{background:'rgba(0,0,0,0)',minWidth:'10px'}}></div>
                        <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#34B199'}}>+{props.change.toLocaleString()} ({props.changePercentage}%)</h3>
                    </div>
                </div>
            </button>
        )
    } else {
        return (
            <button className="price-row-container">
                {iconImage}
                <div style={{minWidth:'10px'}}></div>
                <div style={{background:'rgba(0,0,0,0)'}}>
                    <div style={{background:'rgba(0,0,0,0)',display:'flex',flexDirection:'row'}}>
                        <span style={{color:'#696969',background:'rgba(0,0,0,0)'}}>{props.name}</span>
                    </div>
                    <div style={{background:'rgba(0,0,0,0)',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#333333'}}>{props.currentValue.toLocaleString()}</h3>
                        <div style={{background:'rgba(0,0,0,0)',minWidth:'10px'}}></div>
                        <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#F15E5E'}}>{props.change.toLocaleString()} ({Math.abs(props.changePercentage)}%)</h3>
                    </div>
                </div>
            </button>
        )
    }

    
}