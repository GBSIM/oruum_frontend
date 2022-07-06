import './default.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './components/views/HomePage/HomePage';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>  
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
