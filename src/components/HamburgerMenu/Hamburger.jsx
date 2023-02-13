//import { fallDown as Menu } from 'react-burger-menu';
import React from 'react';
import './Hamburger.css';
//import CountryMap from '../Countries/Countries.jsx'

class Hamburger extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return(
            // <Menu>
            //     <a href="/all-posts" className="menu-item">Home</a>
            //     <a href="" className="menu-item"><CountryMap /></a>
            //     <a href="/sign-out"className="menu-item">Sign out</a>
            // </Menu>

            <div>
            <nav id="main-menu">
            <ul>
                <li><a href="/">Home</a></li>
                {/* <li><a href="/portfolio"><CountryMap /></a></li> */}
                <li><a href="/signout">Sign Out</a></li>
                <li><a href="/create-post">Create New Post</a></li>
            </ul>
            </nav>

            <input type="checkbox" id="hamburger-input" class="burger-shower" />
            <label id="hamburger-menu" for="hamburger-input">
            <nav id="sidebar-menu">
                <h3>Countries</h3>
                <ul>
                <li><a href="/">Home</a></li>
                {/* <li><a href="/portfolio"><CountryMap /></a></li> */}
                <li><a href="/signout">Sign Out</a></li>
                <li><a href="/create-post">Create New Post</a></li>
                </ul>
            </nav>
            </label>

            <div className="overlay"></div>
            </div>
        )
    }
}

export default Hamburger;