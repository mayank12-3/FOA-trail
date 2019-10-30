import React from 'react';
import { Col, Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLightbulb, faPeopleCarry, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { InfoCard } from '../../../common/components/';

const HowDoesItWork = () => {
    const details = [{
        icon: faLightbulb,
        title: ' - Prateek Mehrotra',
        description: 'Best trip ever, we loved it all. The arrangements were perfect as was the food and accomodation.'
    },{
        icon: faPeopleCarry,
        title: ' - Nikhil Vasisht',
        description: 'Excellent Customer Service! We just finished a 7 day Safari in Kenya covering Masai Mara, Lake Nakuru, Naivasha and Amboseli.'
    },{
        icon: faThumbsUp,
        title: ' - Jyoti Roy',
        description: 'My first safari in Masai Mara, I had an amazing experience and totally enjoyed it.'
    },{
        icon: faLightbulb,
        title: ' - Rochelle Xaavier',
        description: 'Fantastic safari and a great experience! one tip to the travelers, if you are looking to purchase some jewellery from community market, please carry some cash.'
    },{
        icon: faPeopleCarry,
        title: ' - Vineet Singhal',
        description: 'Well Curated, perfectly managed, great guides, value for money and highly recommended.'
    },{
        icon: faThumbsUp,
        title: ' - Himanshu Mehta',
        description: 'Kenya and Tanzania cross country Safari – If you are an Indian planning to do a safari in Kenya and Tanzania, then look no further. This company is just fantastic, very professional and highly responsive.'
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
        <div className="testimonial_container">
            <div className="wrapper">
                <h2>What Our Travellers Say</h2>
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