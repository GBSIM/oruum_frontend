import './default.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { createBrowserHistory } from "history";

import { changePage } from './_reducers/nav';

import Home from './components/views/Home/Home';
import Stock from './components/views/Stock/Stock';
import Economy from './components/views/Economy/Economy';
import Asset from './components/views/Asset/Asset';

function App() {
  const currentPath = window.location.pathname;
  const dispatch = useDispatch();
  const history = createBrowserHistory();

  if (currentPath === "/Home") {
    dispatch(changePage('home'));
  } else if (currentPath === "/Stock") {
    dispatch(changePage('stock'));
  } else if (currentPath === "/Economy") {
    dispatch(changePage('economy'));
  } else if (currentPath === "/Asset") {
    dispatch(changePage('asset'));
  } else {
    dispatch(changePage('home'));
  }

  return (
    <Router>
      <div>
        <Routes>  
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/stock" element={<Stock/>} />
          <Route exact path="/economy" element={<Economy/>} />
          <Route exact path="/asset" element={<Asset/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
