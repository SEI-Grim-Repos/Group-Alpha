import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Hamburger.css';
import CountryMap from '../CountryMap/CountryMap';

function Hamburger () {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen)
      }
    
    const closeSideBar = () => {
    setOpen(false)
    }

        return(
            <Menu
                isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}
            >
                <Link to="/" className="logo" onClick={closeSideBar}>GourmetGather</Link>
                <div className="countryMap"><CountryMap closeSideBar={closeSideBar}/></div>
                <Link to="/sign-in" className="menu-item" onClick={closeSideBar}>Sign In</Link>
                {/* <a href="/sign-out"className="menu-item">Sign out</a> */}
            </Menu>
        )
}

export default Hamburger;