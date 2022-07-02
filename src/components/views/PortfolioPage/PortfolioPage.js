import './PortfolioPage.css';
import '../../../default.css';
import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import TopHeader from '../../library/ui/header/TopHeader/TopHeader';
import { useSelector,useDispatch } from "react-redux";
import { deactivateStockSearch } from '../../../_reducers/header';

export default function PortfolioPage() {
    const dispatch = useDispatch();
    const stockSearchDeactivation = () => {
        dispatch(deactivateStockSearch());
    }
    
    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className="main-contents" onClick={stockSearchDeactivation}>
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}
