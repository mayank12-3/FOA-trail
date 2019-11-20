import React from 'react';
import { Col, Row } from 'reactstrap';
import { InfoCard } from '../../../../common/components/';
import Home_1 from '../../../../assets/images/home/kenya-wildebeest-migration-safari.jpg';

const WhyThePackage = () => {
  const details = [{
    thumbnailImageSrc: Home_1,
    title: 'Mingle with the Maasai\'s',
    description: 'It may be the safari in Kenya that draws most of the travelers but it is the Masai tribe who adds distinctive cultural flavor.'
  },{
    thumbnailImageSrc: Home_1,
    title: 'Souvenirs Shopping in Nairobi',
    description: 'Plenty of markets in the center of Nairobi will offer numerous opportunities to snap up a bargain.'
  },{
    thumbnailImageSrc: Home_1,
    title: 'Balloon Safari',
    description: 'As the sun rises in the sky, sail over the rolling grasslands of Masai Mara in a Hot air balloon safari followed by bush breakfast.'
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