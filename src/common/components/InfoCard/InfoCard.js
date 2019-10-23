import React from 'react';
import { 
    Card,
    CardHeader,
    CardContent,
    Typography,
    Avatar
 } from '@material-ui/core';

import './InfoCard.scss';

const InfoCard = (props) => {
    return (
        <Card className={props.className ? ` ${props.className} info-card_container` : 'info-card_container'}>
            <CardHeader 
                avatar={props.cardIcon ? <Avatar>{props.cardIcon}</Avatar> : ''}
                title={props.title}
                subheader={props.subHeader || ''}
            />
            <CardContent>
                <Typography 
                 variant="body2"
                 color="textSecondary" 
                 component="p">
                    {props.description || ''}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoCard;