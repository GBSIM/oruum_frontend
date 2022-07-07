import './MobileNavBar.css';

import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { changePage } from '../../../../../_reducers/nav';

export default function MobileNavBar() {
    const {page} = useSelector(state => state.nav);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changePageEvent = (nextPage) => {
        dispatch(changePage(nextPage));
        navigate('/'+nextPage);
        window.scrollTo(0,0);
    }

    return (
        <div className='mobile-nav-bar'>
            <MobileNavButton
                onImage={require('../../icons/icon_home_oruum_green.png')}
                offImage={require('../../icons/icon_home_grey.png')}
                isOn={page==='home'}
                clickEvent={changePageEvent}
                clickEventInput='home'></MobileNavButton>
            <MobileNavButton
                onImage={require('../../icons/icon_bar_graph_oruum_green.png')}
                offImage={require('../../icons/icon_bar_graph_grey.png')}
                isOn={page==='stock'}
                clickEvent={changePageEvent}
                clickEventInput='stock'></MobileNavButton>
            <MobileNavButton
                onImage={require('../../icons/icon_dollar_oruum_green.png')}
                offImage={require('../../icons/icon_dollar_grey.png')}
                isOn={page==='economy'}
                clickEvent={changePageEvent}
                clickEventInput='economy'></MobileNavButton>
            <MobileNavButton
                onImage={require('../../icons/icon_pie_chart_oruum_green.png')}
                offImage={require('../../icons/icon_pie_chart_grey.png')}
                isOn={page==='asset'}
                clickEvent={changePageEvent}
                clickEventInput='asset'></MobileNavButton>
        </div>
    )
}

function MobileNavButton(props) {
    if (props.isOn) {
        return (
            <button className='mobile-nav-button on'>
                <img src={props.onImage} className='mobile-nav-button-image'></img>
            </button>
        )
    } else {
        return (
            <button className='mobile-nav-button' onClick={() => props.clickEvent(props.clickEventInput)}>                
                <img src={props.offImage} className='mobile-nav-button-image'></img>                
            </button>
        )
    }
}