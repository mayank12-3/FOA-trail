import React from 'react';
import {
  Divider,
  Grid
} from '@material-ui/core';
import { Col, Row } from 'reactstrap';
import { Button } from '../';
import tempImg from '../../../assets/images/modal_image.jpg'
import './Itinerary.scss';

const Itinerary = (props) => {
    let locations = ['Nairobi', 'Samburu (2N)', 'Lake Nakuru (1N)']
    let instructions = [
      'End to End Private Tour',
      'Unlimited Safari Mileage',
      'Masai and Samburu Tribe Visit',
      'Complimentary aiport transfer both ways',
    ]
    return (
      <div className='itenary-container'>
        <div className="wrapper">
          <Row>
            <Col sm='12' lg='9'>
              <Row>
                <Col sm='12' md='5' className='itenary-img-wrapper'>
                  <img src={tempImg} alt="itineraryimage"/>
                </Col>
                <Col sm='12' md='7' className='itenary-content-wrapper'>
                  <div className='content-padding'>
                    <h3 className='mb20'>Heading</h3>
                    <div className='mb10'>
                      <span className='bold-Fonts'>Itinerary:</span> {locations.map((loc, index) =>
                        <span>{loc}{index < (locations.length - 1) ? '→' : ''}</span>
                      )}
                    </div>
                    <div>
                      <ul className='iternary-instructions'>
                        {instructions.map(istr => (
                          <li>
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
                      3, 4 Star Accomodation, Private Vehicle, Top Class Guide, All Park Fees, Indian Meals
                    </div>
                  </div>
                  <Divider variant="middle" />
                  <div className='content-padding'>
                    <h4 className='mb10'>Exclusions</h4>
                    <div className='sub-text'>
                      Flights, Visa
                    </div>
                  </div>
                </Col>
                <Col sm='12' className='content-padding highlighted-content'>
                  <span className='bold-Fonts'>Exclusions: </span>
                  <span>
                    Lion, Leopard, Rhino, Elephant, Buffalo, Giraffe, Zebra, Crocodiles, Cheetah, Hyenas etc.
                  </span>
                </Col>
              </Row>
            </Col>
            <Col sm='12' lg='3' className='text-center pricing-container'>
              <Grid container direction="column"
                justify="space-evenly" alignItems="center" className='pricing-content'>
                <div>
                  <h3>$435345</h3>
                  <div className='sub-text mb20'>
                    Sub text
                  </div>
                </div>
                <div className='mb10'>
                  6D/5N
                </div>
                <div>Apr-Sept</div>
              </Grid>
              <div className='pricing-btn-wrapper'>
                <Button className="primary">
                  Plan my Trip
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
}

export default Itinerary;
