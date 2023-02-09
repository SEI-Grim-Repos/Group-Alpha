import { fallDown as Menu } from 'react-burger-menu';
import React from 'react';
import './Hamburger.css'

class Hamburger extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return(
            <Menu>
                <a className="menu-item">Home</a>
                <a className="menu-item">Country A</a>
                <a className="menu-item">Country B</a>
                <a className="menu-item">Country C</a>
                <a className="menu-item">Country D</a>
            </Menu>
        )
    }
}

export default Hamburger;