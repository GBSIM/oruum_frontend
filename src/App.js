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
import { closeAllWindows } from './_reducers/window';

import Home from './components/views/Home/Home';
import Stock from './components/views/Stock/Stock';
import Economy from './components/views/Economy/Economy';
import Asset from './components/views/Asset/Asset';

function App() {
  const currentPath = window.location.pathname;
  const dispatch = useDispatch();
  const history = createBrowserHistory();

  const {moreWindowOn, searchWindowOn, alarmWindowOn} = useSelector(state => state.window);

  window.onpopstate = function(event) {
    if (moreWindowOn || searchWindowOn || alarmWindowOn) {
      dispatch(closeAllWindows());
    } else {
      console.log("뒤로가기");
      if (window.location.pathname === "/") {
        dispatch(changePage('home'));
      } else if (window.location.pathname === "/stock") {
        dispatch(changePage('stock'));
      } else if (window.location.pathname === "/economy") {
        dispatch(changePage('economy'));
      } else if (window.location.pathname === "/asset") {
        dispatch(changePage('asset'));
      } else if (window.location.pathname === "/home") {
        dispatch(changePage('home'));
      }
    }    
  }
  
  if (window.location.pathname === "/home") {
    dispatch(changePage('home'));
  } else if (window.location.pathname === "/stock") {
    dispatch(changePage('stock'));
  } else if (window.location.pathname === "/economy") {
    dispatch(changePage('economy'));
  } else if (window.location.pathname === "/asset") {
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
