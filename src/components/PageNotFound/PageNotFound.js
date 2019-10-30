import React from 'react';
import { Banner, Button } from '../../common/components/'
import './PageNotFound.scss';

const PageNotFound = (props) => <div className='page_not_found_container'>
  <Banner
      className="banner_section"
      bannerText="404"
      buttonText="Go to Home"
      buttonClassName="primary"
      buttonHandler={() => {
        props.history.replace('/');
      }}
  />
</div>

export default PageNotFound
