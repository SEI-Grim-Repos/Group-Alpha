import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hamburger from './components/HamburgerMenu/Hamburger.jsx';
import Home from './screens/Home/Home.jsx';
import Signup from './screens/Signup/Signup.jsx'
import Signin from './screens/Signin/Signin.jsx'
import CountryMap from './components/Countries/Countries.jsx';


function App() {
  return (
    <div className="App">
      <Hamburger />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/all-posts" element={<Home />} />
          {/* <Route path="/:country>" element={<CountryMap />} /> */}
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
