import React from 'react';
import './navbar.css';
import NavbarButton from '../navbarButton/navbarButton';
import logo from '../../logo.png';

class Navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <NavbarButton text="Home" />
                <NavbarButton text="Movies" />
                <NavbarButton text="TV Series" />
                <NavbarButton text="About" />
            </div>
        );
    }
}

export default Navbar;