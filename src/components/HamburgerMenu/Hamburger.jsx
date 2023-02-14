import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import React from 'react';
import './Hamburger.css';
import CountryMap from '../CountryMap/CountryMap';

class Hamburger extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

render() {
        return(
            <Menu>
                <Link to="/" className="logo">GourmetGather</Link>
                <CountryMap />
                <Link to="/create-post" className="menu-item">Create New Post</Link>
                <Link to="/sign-in" className="menu-item">Sign Up and Sign In</Link>
                {/* <a href="/sign-out"className="menu-item">Sign out</a> */}
            </Menu>
        )
}
}

export default Hamburger;