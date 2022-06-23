import './TopNavMenuBar.css';
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { changePage } from '../../../../../_reducers/pager';

export default function TopNavMenuBar() {
    const {page} = useSelector(state => state.pager);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let isHomeButtonOn = (page === '대쉬보드 홈');
    let isStockButtonOn = (page === '주식 데이터');
    let isEconomyButtonOn = (page === '경제 데이터');
    let isPortfolioButtonOn = (page === '포트폴리오');
    let isSimulationButtonOn = (page === '시뮬레이션');

    const navigateHome = () => {
        dispatch(changePage('대쉬보드 홈'));
        navigate('/');
        window.scrollTo(0,0);
    }
    const navigateStock = () => {
        dispatch(changePage('주식 데이터'));
        navigate('/Stock');
        window.scrollTo(0,0);
    }
    const navigateEconomy = () => {
        dispatch(changePage('경제 데이터'));
        navigate('/Economy');
        window.scrollTo(0,0);
    }
    const navigatePortfolio = () => {
        dispatch(changePage('포트폴리오'));
        navigate('/Portfolio');
        window.scrollTo(0,0);
    }
    const navigateSimulation = () => {
        dispatch(changePage('시뮬레이션'));
        navigate('/Simulation');
        window.scrollTo(0,0);
    }

    return (
        <div className='top-nav-menu-container'>
            <TopNavMenu
                isButtonOn={isHomeButtonOn}
                onImage={require('../../images/Icon/icon_home_oruum_green.png')}
                offImage={require('../../images/Icon/icon_home_grey.png')}
                onClickEvent={navigateHome}></TopNavMenu>
            <TopNavMenu
                isButtonOn={isStockButtonOn}
                onImage={require('../../images/Icon/icon_bar_graph_oruum_green.png')}
                offImage={require('../../images/Icon/icon_bar_graph_grey.png')}
                onClickEvent={navigateStock}></TopNavMenu>
            <TopNavMenu
                isButtonOn={isEconomyButtonOn}
                onImage={require('../../images/Icon/icon_dollar_oruum_green.png')}
                offImage={require('../../images/Icon/icon_dollar_grey.png')}
                onClickEvent={navigateEconomy}></TopNavMenu>
            <TopNavMenu
                isButtonOn={isPortfolioButtonOn}
                onImage={require('../../images/Icon/icon_pie_chart_oruum_green.png')}
                offImage={require('../../images/Icon/icon_pie_chart_grey.png')}
                onClickEvent={navigatePortfolio}></TopNavMenu>
        </div>
    )
}

function TopNavMenu(props) {
    if (props.isButtonOn) {
        return (
            <button className="top-nav-menu-button on">
                <div className="top-nav-menu-container on">
                    <img className='top-nav-menu-image' src={props.onImage}></img>
                </div>
            </button>
        )
    } else {
        return (
            <button className="top-nav-menu-button" onClick={props.onClickEvent}>
                <div className="top-nav-menu-container off">
                    <img className='top-nav-menu-image' src={props.offImage}></img>
                </div>
            </button>
        )
    }
}