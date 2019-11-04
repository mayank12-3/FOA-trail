import React from 'react';
import { Col, Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { InfoCard } from '../../../common/components/';

const HowDoesItWork = () => {
    const details = [{
        icon: faUserGraduate,
        title: 'Best Trip Ever',
        description: 'Best trip ever, we loved it all. The arrangements were perfect as was the food and accommodation.',
        name: "- Prateek Mehrotra"
    },{
        icon: faUserGraduate,
        title: 'Excellent Customer Service',
        description: 'Excellent Customer Service! We just finished a 7 day Safari in Kenya covering Masai Mara, Lake Nakuru, Naivasha and Amboseli.',
        name: "- Nikhil Vasisht"

    },{
        icon: faUserGraduate,
        title: 'Highly Recommended',
        description: 'My first safari in Masai Mara, I had an amazing experience and totally enjoyed it. Highly Recommend these guys for all African tours.',
        name: "- Jyoti Roy"
    },{
        icon: faUserGraduate,
        title: 'Outstanding Experience',
        description: 'Fantastic safari and an outstanding experience! one tip to the travelers, if you are looking to purchase some jewelry from the community market, please carry enough cash.',
        name: "- Rochelle Xaavier"
    },{
        icon: faUserGraduate,
        title: 'Well Curated and Great Guides',
        description: 'Well Curated, perfectly managed, great guides, value for money and highly recommended.',
        name: "- Vineet Singhal"
    },{
        icon: faUserGraduate,
        title: 'Very Professional and Super Fast',
        description: ' If you are an Indian and planning to do a safari in Kenya and Tanzania, then look no further. This Indian company is just fantastic, very professional and highly responsive.',
        name: "- Himanshu Mehta"
    }];

    const renderInfoCard = () => {
        return details.map((data, i) => {
            const cardIcon = <FontAwesomeIcon icon={data.icon} />
            return (
                <Col sm="4" key={i}>
                    <InfoCard
                        footer={data.name}
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