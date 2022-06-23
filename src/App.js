import './default.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import HomePage from './components/views/HomePage/HomePage';
import StockPage from './components/views/StockPage/StockPage';
import EconomyPage from './components/views/EconomyPage/EconomyPage';
import IndustryPage from './components/views/IndustryPage/IndustryPage';
import PortfolioPage from './components/views/PortfolioPage/PortfolioPage';
import SimulationPage from './components/views/SimulationPage/SimulationPage';

import {getCurrentPrice} from './_reducers/stock';
import { changePage } from './_reducers/pager';


function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getCurrentPrice('aapl'));
  },[]);

  const currentPath = window.location.pathname;
  if (currentPath === "/") {
    dispatch(changePage('대쉬보드 홈'));
  } else if (currentPath === "/Stock") {
    dispatch(changePage('주식 데이터'));
  } else if (currentPath === "/Economy") {
    dispatch(changePage('경제 데이터'));
  } else if (currentPath === "/Industry") {
    dispatch(changePage('산업 데이터'));
  } else if (currentPath === "/Portfolio") {
    dispatch(changePage('포트폴리오'));
  } else if (currentPath === "/Simulation") {
    dispatch(changePage('시뮬레이션'));
  }

  return (
    <Router>
      <div>
        <Routes>  
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/Stock" element={<StockPage />} />
          <Route exact path="/Economy" element={<EconomyPage />} />
          <Route exact path="/Industry" element={<IndustryPage />} />
          <Route exact path="/Portfolio" element={<PortfolioPage />} />
          <Route exact path="/Simulation" element={<SimulationPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
