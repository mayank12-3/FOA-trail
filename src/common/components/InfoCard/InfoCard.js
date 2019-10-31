import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Typography,
    Avatar
 } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import './InfoCard.scss';

const InfoCard = (props) => {
    const handleOnClick = () => {
        if(props.path) {
            props.history.push(props.path)
        }
    }
    return (
        <Card className={props.className ? ` ${props.className} info-card_container` : 'info-card_container'} onClick={handleOnClick}>
            {
                props.src ?
                <CardMedia
                    image={props.src}
                    title={props.imageTitle}/> : ''
            }
            {
                props.tag ?
                <div className="tag">
                    {props.tag}
                </div> : ''
            }
            <CardContent>
                <CardHeader
                    avatar={props.cardIcon ? <Avatar>{props.cardIcon}</Avatar> : ''}
                    title={props.title}
                    subheader={props.subHeader || ''}
                />
                <Typography
                 variant="body2"
                 color="textSecondary"
                 component="p">
                    {props.description || ''}
                </Typography>
                {
                    props.footer ?
                    <div className="card-footer_container">
                        {props.footer}
                    </div> : ''
                }
            </CardContent>
        </Card>
    );
}

export default withRouter(InfoCard);
