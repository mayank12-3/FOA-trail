import React from 'react';
import { Col, Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLightbulb, faPeopleCarry, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { InfoCard } from '../../../common/components/';

const HowDoesItWork = () => {
    const details = [{
        icon: faLightbulb,
        title: 'Drop us an Inquiry',
        description: 'Every Safari experience is unique and so are the requirements, Share your details like name, email, and number. We would love to talk to you and understand your needs.'
    },{
        icon: faPeopleCarry,
        title: 'Speak to a Safari Expert',
        description: 'You will hear from us within 15 mins and that’s a promise! You can let us know the desired method of communication - Call/ Email/ Whatsapp in the message section while dropping an inquiry.'
    },{
        icon: faThumbsUp,
        title: 'Get your Package.',
        description: 'All Packages will be sent on Email. Prices received by any other means - Call/Whatsapp are not final unless confirmed via Email.'
    }];

    const renderInfoCard = () => {
        return details.map((data, i) => {
            const cardIcon = <FontAwesomeIcon icon={data.icon} />
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