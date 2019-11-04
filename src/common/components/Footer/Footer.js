import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <div className="wrapper">
                <div className="footer-links">
                    <div className="website-logo">
                        <Link to="/">
                            <img src={Logo} alt="full of africa" />
                        </Link>
                    </div>
                    <div className="country-list">
                        <ul>
                            <li>
                                <h3>Destinations</h3>
                            </li>
                            <li>
                                <Link to="/tour?country=kenya">
                                    Kenya
                                </Link>
                            </li>
                            <li>
                                <Link to="/tour?country=uganda">
                                    Uganda
                                </Link>
                            </li>
                            <li>
                                <Link to="/tour?country=tanzania">
                                    Tanzania
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <ul>
                            <li>
                                <h3>Discover</h3>
                            </li>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact-us">
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions">
                                    Terms and Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="social-media">
                        <h3>join us on</h3>
                        
                          <FontAwesomeIcon icon={faFacebookSquare} />
                          <FontAwesomeIcon icon={faTwitterSquare} />
                         
                    </div> */}
                </div>
            </div>
            <p>
                &copy; Copyright {date.getFullYear()}  Full of Africa. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;
