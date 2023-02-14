import { slide as Menu } from 'react-burger-menu';
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
                <a href="/" className="logo">GourmetGather</a>
                <a href="/country" className="menu-item"><CountryMap /></a>
                <a href="/create-post" className="menu-item">Create New Post</a>
                <a href="/sign-in" className="menu-item">Sign Up and Sign In</a>
                {/* <a href="/sign-out"className="menu-item">Sign out</a> */}
            </Menu>
        )
}
}

export default Hamburger;