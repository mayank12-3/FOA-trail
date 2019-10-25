import React from 'react';
import { Col, Row } from 'reactstrap';
import { InfoCard } from '../../../common/components/';
import Package1 from '../../../assets/images/package_1.jpg';
import Package2 from '../../../assets/images/package_2.jpg';
import Package3 from '../../../assets/images/package_3.jpg';

const Packages = () => {
    const details = [{
        src: Package1,
        imageTitle: 'Lorem Ipsum',
        title: 'Lorem Ipsum',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },{
        src: Package2,
        imageTitle: 'Lorem Ipsum',
        title: 'Lorem Ipsum',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },{
        src: Package3,
        imageTitle: 'Lorem Ipsum',
        title: 'Lorem Ipsum',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }];
    const renderInfoCard = () => {
        return details.map((data, i) => {
            return (
                <Col sm="4" key={i}>
                    <InfoCard
                        src={data.src}
                        imageTitle={data.imageTitle}
                        title={data.title}
                        description={data.description}
                    />
                </Col>
            )
        });
    }
    return(
        <div className="packages_container">
            <div className="wrapper">
                <h2>Theme Based Tours</h2>
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

export default Packages;