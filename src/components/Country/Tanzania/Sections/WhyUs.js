import React from 'react';
import { Col, Row } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { 
    faUsers, 
    faSlidersH,
    faHeadset,
    faShuttleVan,
    faCoins,
    faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { InfoCard } from '../../../../common/components/';

const WhyUs = () => {
    const details = [{
        icon: faUsers,
        title: 'Experienced Guides',
        description: 'We strongly believe – A guide makes or breaks the safari hence we have handpicked the best of the guides to deliver an awesome Kenya Safari experience.'
    },{
        icon: faSlidersH,
        title: 'Tailor-Made Itineraries',
        description: 'Requirements of all travellers are unique, so should be the experience. We cater services to all kinds of travellers ranging from camping for backpackers to glamping for luxury travellers.'
    },{
        icon: faHeadset,
        title: 'Great Customer Support',
        description: 'Planning a Safari in Kenya can get very overwhelming. A simple way to get all your answers – Call / Email / Chat with us before, during and after your journey.'
    },{
        icon: faShuttleVan,
        title: 'Great vehicles',
        description: 'Roads leading to parks like Masai Mara and Amboseli have a rugged terrain hence we make sure vehicles are in good condition, fully checked and serviced before every departure so you have smooth drive.'
    },{
        icon: faCoins,
        title: 'Value for money',
        description: 'We have been doing the Kenyan safaris for years. We exactly know the price of doing a legitimate safari. You can count on our price to be fair and very competitive in the market.'
    },{
        icon: faInfoCircle,
        title: 'Our Safari Knowledge',
        description: 'We have the first-hand experience in all the Kenya Safaris we offer, all our experts have in-depth knowledge of the Safari as well as the terrain, near-by attractions etc.'
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
        <div className="why-us_container">
            <div className="wrapper">
                <h2>Why choose us for your Tanzania Safari?</h2>
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

export default WhyUs;