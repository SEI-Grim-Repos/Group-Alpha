import { fallDown as Menu } from 'react-burger-menu';
import React from 'react';
import './Hamburger.css';
import CountryMap from '../Countries/Countries.jsx'

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
            <></>
        )
    }
}

export default Hamburger;