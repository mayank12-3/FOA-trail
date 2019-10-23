import React from 'react';

import './Footer.scss';

const Footer = () => {
    const date = new Date();
    return(
        <footer>
            <div className="wrapper">
                <p>
                    &copy; Copyright {date.getFullYear()}  Full of Africa. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;