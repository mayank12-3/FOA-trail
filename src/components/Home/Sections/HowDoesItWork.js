import React from 'react';
import { Col, Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLightbulb, faPeopleCarry, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { InfoCard } from '../../../common/components/';

const HowDoesItWork = () => {
    const details = [{
        icon: faLightbulb,
        title: 'Tell us your plan',
        description: 'Give us details like the group size, Safari duration, parks and reserves you wish to visit.'
    },{
        icon: faPeopleCarry,
        title: 'Get a customized package',
        description: 'Talk to our Safari experts and get the customized package within 1 business day.'
    },{
        icon: faThumbsUp,
        title: 'Book your Safari',
        description: 'Book your Safari with our easy and secure booking process. Experience wilderness!'
    }];

    const renderInfoCard = () => {
        return details.map((data, i) => {
            const cardIcon = <FontAwesomeIcon size="2x" icon={data.icon} />
            return (
                <Col sm="4" key={i}>
                    <InfoCard
                        cardIcon={cardIcon}
                        title={data.title}
                        description={data.description}
                    />
                </Col>
            )
        });
    }
    return (
        <div className="how-does-it-work_container">
            <div className="wrapper">
                <h2>How Does It Work?</h2>
                <div className="work-flow_blocks">
                    <Row>
                        {
                            renderInfoCard()
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default HowDoesItWork;