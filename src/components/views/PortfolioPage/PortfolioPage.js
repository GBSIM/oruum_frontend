import './PortfolioPage.css';
import '../../../default.css';
import BottomNavMenuBar from '../../library/ui/nav/BottomNavMenuBar/BottomNavMenuBar';
import TopHeader from '../../library/ui/header/TopHeader/TopHeader';

export default function PortfolioPage() {
    return (
        <div className='page'>
            <TopHeader></TopHeader>
            <div className="main-contents">
            </div>
            <BottomNavMenuBar></BottomNavMenuBar>
        </div>
    )
}
