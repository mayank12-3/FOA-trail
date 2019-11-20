import React from 'react';
import { Col, Row } from 'reactstrap';
import { InfoCard } from '../../../common/components/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import packages from '../../../utils/packages.json';

const Packages = () => {
  const renderInfoCard = () => {
    return packages.map((data, i) => {
      const thumbnailImageSrc = data.thumbnail ? require(`../../../assets/images/packages/thumbnails/${data.thumbnail}`) : '';
      const duration = getDurationComponent(data.duration);
      const tag = getTagComponent(data.startingFromPrice);
      return (
        <Col sm="6" md="4" key={i}>
          <InfoCard
            footer={duration}
            tag={tag}
            path={`/details?package=${data.title}&id=${data.package_id}`}
            src={thumbnailImageSrc}
            imageTitle={data.imageTitle}
            title={data.title}
            description={data.description}
          />
        </Col>
      )
    });
  }

  const getDurationComponent = (duration) => {
    return (
      <div className="duration">
        <FontAwesomeIcon icon={faClock} />
        <span>{duration}</span>
      </div>
    );
  }

  const getTagComponent = (startingFrom = '') => {
    return startingFrom ? <p>Starting From {startingFrom}</p> : ''
  }
  return(
    <div className="packages_container">
      <div className="wrapper">
        <h2>Featured Tour Packages</h2>
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