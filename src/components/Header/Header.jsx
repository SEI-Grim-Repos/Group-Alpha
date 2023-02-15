import { useNavigate } from 'react-router-dom';
import Hamburger from '../HamburgerMenu/Hamburger.jsx'


function Header() {
    let navigate = useNavigate()

    function handleNav() {
        navigate('/create-post', { replace: true })
    }
return(
    <>
    <div className='Title'>
        {/* <h1>FoodFeed</h1> */}
    </div>
    <div><Hamburger /></div>
    <div id="create-button"></div>
    <button onClick={handleNav}>Create new post</button>
    </>
)
}

export default Header;