import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hamburger from './components/HamburgerMenu/Hamburger.jsx';
import Home from './screens/Home/Home.jsx';
import Signup from './screens/Signup/Signup.jsx';
import Signin from './screens/Signin/Signin.jsx';
import NewPost from './screens/CreatePost/CreatePost.jsx';



function App() {
  return (
    <div className="App">
      <Hamburger />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/all-posts" element={<Home />} />
          <Route path="/create-post" element={<NewPost />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
