import React from 'react';
import Button from '../Button/Button';

import './Banner.scss';

const Banner = (props) => {
    return (
        <div className="banner_section">
            <div className={props.className ? `banner ${props.className}` : 'banner'} style={props.style}>
                <p>{props.bannerText}</p>
                {
                    props.buttonText ?
                    <Button
                        onClick={props.buttonHandler}
                        className={props.buttonClassName || 'primary'}
                    >
                        {props.buttonText}
                    </Button> : ''
                }
            </div>
        </div>
    );
}

export default Banner;