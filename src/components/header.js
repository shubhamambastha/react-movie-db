import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MovieLogo from '../images/logo.png'
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="header-content">
                    <Link to="/">
                        <img className="Logo" src={MovieLogo} alt="rmdb-logo" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header;