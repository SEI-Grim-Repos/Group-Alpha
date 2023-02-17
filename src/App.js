import './App.css';
import {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Hamburger from './components/HamburgerMenu/Hamburger.jsx';
import Home from './screens/Home/Home.jsx';
import Signin from './screens/Signin/Signin.jsx';
import NewPost from './screens/CreatePost/CreatePost.jsx';
import SignUp from './screens/Signup/Signup.jsx';
import CountryPage from './screens/CountryPage/Country.jsx';
import { getUser } from './services/users.js';

function App() {

    const [user, setUser] = useState(null)

    useEffect(()=>{
        const fetchUser = async () => {
            let response = await getUser()
            setUser(response)
        }

        fetchUser()
    }, [])

  return (
    <div className="App">
      <Hamburger user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<NewPost />} />
          <Route path="/country/:country" element={<CountryPage />}/>
          <Route path="/sign-in" element={<Signin setUser={setUser}/>} />
          <Route path="/sign-up" element={<SignUp setUser={setUser}/>} />
        </Routes>
    </div>
  );
}

export default App;
