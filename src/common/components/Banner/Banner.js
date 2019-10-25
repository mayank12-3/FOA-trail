import React from 'react';
import Button from '../Button/Button';

import './Banner.scss';

const Banner = (props) => {
    return (
        <div className={props.className ? `banner ${props.className}` : 'banner'}>
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
    );
}

export default Banner;