import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Hamburger from './components/HamburgerMenu/Hamburger.jsx';
import Home from './screens/Home/Home.jsx'


function App() {
  return (
    <div className="App">
      <Router>
      <Hamburger />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
