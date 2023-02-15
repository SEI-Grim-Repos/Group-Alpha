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
                <div className="countryMap"><CountryMap /></div>
                <Link to="/sign-in" className="menu-item">Sign In</Link>
                {/* <a href="/sign-out"className="menu-item">Sign out</a> */}
            </Menu>
        )
}
}

export default Hamburger;