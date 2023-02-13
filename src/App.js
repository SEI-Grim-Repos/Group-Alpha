import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hamburger from './components/HamburgerMenu/Hamburger.jsx';
import Home from './screens/Home/Home.jsx';
import Signout from './screens/Signout/Signout.jsx'
import Signin from './screens/Signin/Signin.jsx'


function App() {
  return (
    <div className="App">
      <button><Hamburger /> Start</button>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/all-posts" element={<Home />} />
          <Route path="/sign-out" element={<Signout />} />
          <Route path="/sign-in" element={<Signin />} />
        </Routes>
    </div>
  );
}

export default App;
