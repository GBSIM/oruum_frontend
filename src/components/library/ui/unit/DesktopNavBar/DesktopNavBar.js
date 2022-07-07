import './DesktopNavBar.css';

import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { changePage } from '../../../../../_reducers/nav';

export default function DesktopNavBar() {
    const {page} = useSelector(state => state.nav);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changePageEvent = (nextPage) => {
        dispatch(changePage(nextPage));
        navigate('/'+nextPage);
        window.scrollTo(0,0);
    }

    return (
        <div className='desktop-nav-bar'>
            <DesktopNavButton
                onImage={require('../../icons/icon_home_oruum_green.png')}
                offImage={require('../../icons/icon_home_grey.png')}
                isOn={page==='home'}
                clickEvent={changePageEvent}
                clickEventInput='home'></DesktopNavButton>
            <DesktopNavButton
                onImage={require('../../icons/icon_bar_graph_oruum_green.png')}
                offImage={require('../../icons/icon_bar_graph_grey.png')}
                isOn={page==='stock'}
                clickEvent={changePageEvent}
                clickEventInput='stock'></DesktopNavButton>
            <DesktopNavButton
                onImage={require('../../icons/icon_dollar_oruum_green.png')}
                offImage={require('../../icons/icon_dollar_grey.png')}
                isOn={page==='economy'}
                clickEvent={changePageEvent}
                clickEventInput='economy'></DesktopNavButton>
            <DesktopNavButton
                onImage={require('../../icons/icon_pie_chart_oruum_green.png')}
                offImage={require('../../icons/icon_pie_chart_grey.png')}
                isOn={page==='asset'}
                clickEvent={changePageEvent}
                clickEventInput='asset'></DesktopNavButton>
        </div>
    )
}

function DesktopNavButton(props) {
    if (props.isOn) {
        return (
            <button className='desktop-nav-button on'>
                <div className='desktop-nav-button-image-container on'>
                    <img src={props.onImage} className='desktop-nav-button-image'></img>
                </div>
            </button>
        )
    } else {
        return (
            <button className='desktop-nav-button' onClick={() => props.clickEvent(props.clickEventInput)}>
                <div className='desktop-nav-button-image-container'>
                    <img src={props.offImage} className='desktop-nav-button-image'></img>
                </div>
            </button>
        )
    }
}