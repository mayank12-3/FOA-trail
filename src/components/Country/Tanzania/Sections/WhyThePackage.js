import React from 'react';
import { Col, Row } from 'reactstrap';
import { InfoCard } from '../../../../common/components/';
import Home_1 from '../../../../assets/images/Home_1.jpg';


const WhyThePackage = () => {
    const details = [{
        thumbnailImageSrc: Home_1,
        title: "Mingle with the Maasai's",
        description: "It may be the safari in Kenya that draws most of the travelers but it is the Masai tribe who adds distinctive cultural flavor."
    },{
        thumbnailImageSrc: Home_1,
        title: "The Migration Safari ",
        description: " Follow the never-ending cycle of terror and turmoil from Serengeti to Masai Mara on a cross country safari between Tanzania and Kenya."
    },{
        thumbnailImageSrc: Home_1,
        title: " The Big 5 Safari - Spot the Big 5 of Africa",
        description: "Lion, Leopards, Elephant, Rhino and Buffalo with our expert guide on your Masai Mara trip."
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
                <h2>Add on's with Safari Tour</h2>
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