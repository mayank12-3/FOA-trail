import React from 'react';
import { Button as MButton } from '@material-ui/core';

import './Button.scss';

const Button = (props) => {
    return <MButton variant="contained" type={props.type || 'button'} {...props}>{props.children}</MButton>
}

export default Button;