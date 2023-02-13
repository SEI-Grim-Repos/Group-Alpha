import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hamburger from './components/HamburgerMenu/Hamburger.jsx';
import Home from './screens/Home/Home.jsx'
import Signin from './screens/Signin/Signin.jsx';


function App() {
  return (
    <div className="App">
      <Hamburger />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
    </div>
  );
}

export default App;
