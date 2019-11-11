import React from 'react';
import { withRouter } from 'react-router-dom';
import { Banner } from '../../common/components/';
import './ThankYou.scss';

export const ThankYouComponent = props => (
  <div className="thank-you-component">
      <Banner
          bannerText="Thank You for your submission"
          buttonText="Get To Home"
          buttonClassName="primary"
          buttonHandler={() => props.history.replace('/')}
      />
  </div>
)

export default withRouter(ThankYouComponent)
