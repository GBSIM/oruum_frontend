import './PortfolioPage.css';
import '../../../default.css';
import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import TopHeader from '../../library/ui/header/TopHeader/TopHeader';
import { useSelector,useDispatch } from "react-redux";
import { deactivateStockSearch } from '../../../_reducers/header';
import AssetProfile from '../../library/ui/portfolio/AssetProfile/AssetProfile';
import MoneyRatio from '../../library/ui/portfolio/MoneyRatio/MoneyRatio';

export default function PortfolioPage() {
    const dispatch = useDispatch();
    const stockSearchDeactivation = () => {
        dispatch(deactivateStockSearch());
    }
    
    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className="main-contents" onClick={stockSearchDeactivation}>
                <div className="main-center-contents" >
                    <div className="portfolio-page-top-space"></div>
                    <div className="unit-box portfolio-top">
                        <AssetProfile></AssetProfile>
                    </div>
                    <div style={{height:'20px'}}></div>
                    <div className="unit-box">
                        <MoneyRatio></MoneyRatio>
                    </div>
                    <div style={{height:'20px'}}></div>
                </div>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}
