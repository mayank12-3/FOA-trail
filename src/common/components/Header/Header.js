import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import logo from '../../../assets/images/logo.png';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="site-brand">
          {/* <Link to="/"> */}
            <img src={logo} alt="Full Of Africa" />
          {/* </Link> */}
        </div>
        <div className="navigation">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;