import React from 'react';
import { withRouter } from 'react-router-dom';
import { Banner } from '../../common/components/';
import HowDoesItWork from '../Home/Sections/HowDoesItWork';
import './ThankYou.scss';

export const ThankYouComponent = props => (
  <div className="thank-you-component">
      <Banner
          bannerText="Thank you for your interest! Our Experts will call you shortly"
          buttonText="Get To Home"
          buttonClassName="primary"
          buttonHandler={() => props.history.replace('/')}
      />
      <HowDoesItWork />
  </div>
)

export default withRouter(ThankYouComponent)
