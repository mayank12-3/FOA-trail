import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import logo from '../../../assets/images/logo.png';
import './Header.scss';

const Header = (props) => {
    return (
        <header>
            <div className="wrapper">
                <div className="website_logo">
                    <Link to="/">
                        <img src={logo} alt="Full of africa" />
                    </Link>
                </div>
                <div className="navigation">
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;
