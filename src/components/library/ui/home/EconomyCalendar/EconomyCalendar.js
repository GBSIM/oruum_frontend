import './EconomyCalendar.css';
import CountrySelector from '../../unit/CountrySelector/CountrySelector';
import Calendar from '../../unit/Calendar/Calendar';

export default function EconomyCalendar() {
    return (
        <div>
            <h2 style={{color:'#333333',margin:'0'}}>경제 캘린더</h2>
            <div style={{height:'20px'}}></div>
            <Calendar
                dayList={['','','','1','2','3','4',
                          '5','6','7','8','9','10','11',
                          '12','13','14','15','16','17','18',
                          '19','20','21','22','23','24','25',
                          '26','27','28','29','30','','']}></Calendar>
            <div style={{height:'20px'}}></div>
            <CountrySelector></CountrySelector>
            <div style={{height:'30px'}}></div>
            <div>
                <EconomyEvent
                    image={require('../../images/Icon/icon_south_korea.png')}
                    name='한국 고용증가율'
                    estimate={6.1}
                    real={8.5}></EconomyEvent>
                <div style={{height:'10px'}}></div>
                <EconomyEvent
                    image={require('../../images/Icon/icon_south_korea.png')}
                    name='한국 물가상승률'
                    estimate={5.1}
                    real={5.7}></EconomyEvent>
                <div style={{height:'10px'}}></div>
                <EconomyEvent
                    image={require('../../images/Icon/icon_south_korea.png')}
                    name='한국 물가상승률'
                    estimate={5.1}
                    real={5.7}></EconomyEvent>                    
            </div>
            <div style={{height:'30px'}}></div>
        </div>
    )
}

function EconomyEvent(props) {
    return (
        <button className="economy-event-container">
            <img style={{background:'rgba(0,0,0,0)'}} src={props.image} className='economy-event-image'></img>
            <div style={{minWidth:'10px'}}></div>
            <div style={{background:'rgba(0,0,0,0)'}}>
                <div style={{background:'rgba(0,0,0,0)',display:'flex',flexDirection:'row'}}>
                    <span style={{color:'#696969',background:'rgba(0,0,0,0)'}}>{props.name}</span>
                </div>
                <div style={{background:'rgba(0,0,0,0)',display:'flex',flexDirection:'row',alignItems:'baseline'}}>
                    <span style={{background:'rgba(0,0,0,0)',margin:'0',color:'#B9B9B9'}}>예상</span>
                    <div style={{background:'rgba(0,0,0,0)',minWidth:'5px'}}></div>
                    <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#333333'}}>{props.estimate}%</h3>
                    <div style={{background:'rgba(0,0,0,0)',minWidth:'20px'}}></div>
                    <span style={{background:'rgba(0,0,0,0)',margin:'0',color:'#B9B9B9'}}>발표</span>
                    <div style={{background:'rgba(0,0,0,0)',minWidth:'5px'}}></div>
                    <h3 style={{background:'rgba(0,0,0,0)',margin:'0',color:'#34B199'}}>{props.real}%</h3>
                </div>
            </div>
        </button>
    )
}