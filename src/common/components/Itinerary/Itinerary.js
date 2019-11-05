import React from 'react';
import {
  Divider,
  Grid
} from '@material-ui/core';
import { Col, Row } from 'reactstrap';
import { Button } from '../';
// import tempImg from '../../../assets/images/others/modal_image.jpg'
import './Itinerary.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faCalendar} from '@fortawesome/free-solid-svg-icons';

const Itinerary = (props) => {
    const renderOptions = (itinerary = []) => {
      return props.itinerary.map((data, i) => {
        const thumbnailImageSrc = data.thumbnail ? require(`../../../assets/images/${data.country}-landing/${data.thumbnail}`) : '';
debugger
          return (
            <div key={i} className="planned_itinerary">
              <Row>
              <Col sm='12' lg='9'>
                <Row>
                  <Col sm='12' md='5' className='itenary-img-wrapper'>
                    <img src={thumbnailImageSrc} alt="itineraryimage"/>
                  </Col>
                  <Col sm='12' md='7' className='itenary-content-wrapper'>
                    <div className='content-padding'>
                      <h3 className='mb20'>{data.title}</h3>
                      <div className='mb10'>
                        <span className='bold-Fonts'>Itinerary:</span> {data.locations.map((loc, index) =>
                          <span key={index}>{loc}{index < (data.locations.length - 1) ? '→' : ''}</span>
                        )}
                      </div>
                      <div>
                        <ul className='iternary-instructions'>
                          {data.instructions.map((istr, index) => (
                            <li key={index}>
                              -> {istr}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Divider variant="middle" />
                    <div className='content-padding'>
                      <h4 className='mb10'>Inclusions:</h4>
                      <div className='sub-text'>
                        {data.inclusions}
                      </div>
                    </div>
                    <Divider variant="middle" />
                    <div className='content-padding'>
                      <h4 className='mb10'>Exclusions</h4>
                      <div className='sub-text'>
                        {data.exclusions}
                      </div>
                    </div>
                  </Col>
                  <Col sm='12' className='content-padding highlighted-content'>
                    <span className='bold-Fonts'>Expected Sightings: </span>
                    <span>
                      {data.expectedSightings}
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col sm='12' lg='3' className='text-center pricing-container'>
                <Grid container direction="column"
                  justify="space-evenly" alignItems="center" className='pricing-content'>
                  <div>
                    <h3>{data.price}</h3>
                    <div className='sub-text mb20'>
                      {data.description}
                    </div>
                  </div>
                  <div className="mb10 pricing-details_extras">
                    <FontAwesomeIcon icon={faClock} />
                    <span>{data.duration}</span>
                  </div>
                  <div className="pricing-details_extras">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>
                      {data.season}
                    </span>
                  </div>
                </Grid>
                <div className='pricing-btn-wrapper'>
                  <Button className="primary">
                    Plan my Trip
                  </Button>
                </div>
              </Col>
            </Row>
            </div>
          )
      });
    }

    return (
      <div className='itenary-container'>
        <div className="wrapper">
        { props && props.itinerary ?
          renderOptions(props.itinerary)
          : ''
        }
        </div>
      </div>
    );
}

export default Itinerary;
