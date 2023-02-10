import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hamburger from './components/HamburgerMenu/Hamburger.jsx';
import Home from './screens/Home/Home.jsx'


function App() {
  return (
    <div className="App">
      <Hamburger />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
