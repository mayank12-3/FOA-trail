import React from 'react';
import { Col, Row } from 'reactstrap';
import { InfoCard } from '../../../../common/components/';
import add_on_1 from '../../../../assets/images/kenya-landing/add-on-1.jpg';
import add_on_2 from '../../../../assets/images/kenya-landing/add-on-2.jpg';
import add_on_3 from '../../../../assets/images/kenya-landing/add-on-3.jpg';


const WhyThePackage = () => {
    const details = [{
        thumbnailImageSrc: add_on_1 ,
        title: "Mingle with the Maasai's",
        description: "It may be the safari in Kenya that draws most of the travelers but it is the Masai tribe who adds distinctive cultural flavor."
    },{
        thumbnailImageSrc: add_on_2,
        title: "Souvenirs Shopping in Nairobi",
        description: "Plenty of markets in the center of Nairobi will offer numerous opportunities to snap up a bargain."
    },{
        thumbnailImageSrc: add_on_3,
        title: "Balloon Safari",
        description: "As the sun rises in the sky, sail over the rolling grasslands of Masai Mara in a Hot air balloon safari followed by bush breakfast."
    }];

    const renderInfoCard = () => {
        return details.map((data, i) => {
            return (
                <Col sm="4" key={i}>
                    <InfoCard
                        src={data.thumbnailImageSrc}
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
                <h2>Additional Activities</h2>
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

export default WhyThePackage;