import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Hamburger from './components/HamburgerMenu/Hamburger.jsx';
import Home from './screens/Home/Home.jsx';
import Signin from './screens/Signin/Signin.jsx';
import NewPost from './screens/CreatePost/CreatePost.jsx';
import Modal from './components/Modal/Modal.jsx';
import SignUp from './screens/Signup/Signup.jsx';
import Header from './components/Header/Header.jsx'

function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<NewPost />} />
          <Route path="/country/:country" element={<Modal />}/>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-post" element={<NewPost />} />
        </Routes>
    </div>
  );
}

export default App;
