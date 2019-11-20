import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ContactDetailsForm, SliderBanner, CoverSlider } from '../../common/components/';
import HelpMe from './Sections/HelpMe';
import Testimonial from './Sections/Testimonial';
import WhoAreWe from './Sections/WhoAreWe';
import Packages from './Sections/Packages';
import Slide_1 from '../../assets/images/home/kenya-wildebeest-migration-safari.jpg';
import Slide_2 from '../../assets/images/home/masai-mara-migration-safari.jpg';
import Slide_3 from '../../assets/images/home/kenya-safari.jpg';
import Slide_4 from '../../assets/images/home/kenya-luxury-tour.jpg';
import Slide_5 from '../../assets/images/home/kenya-classic-tour.jpg';
import './Home.scss';

class Home extends Component {
  state = {
    isContactUsModalOpen: false
  };

  sliders = [{
    src: Slide_1,
    altText: 'Kenya Wildebeest Migration Safari',
    caption: 'Enchanting Wilderness',
    // path: 'Kenya'
  },{
    src: Slide_2,
    altText: 'Masai Mara Migration Safari',
    caption: 'Exciting Safaris',
    // path: 'Uganda'
  },{
    src: Slide_3,
    altText: 'Kenya Migration Safari',
    caption: 'Enthralling Landscapes ',
    // path: 'Tanzania'
  },{
    src: Slide_4,
    altText: 'Kenya Luxury Tour',
    caption: 'Ecstatic vibes',
    // path: 'Tanzania'
  },{
    src: Slide_5,
    altText: 'Kenya Classic Tour',
    caption: 'Enticing Destinations',
    // path: 'Tanzania'
  }];

  toggleModal = () => {
    this.setState({
      isContactUsModalOpen: !this.state.isContactUsModalOpen
    });
  }
  onGetStarted = () => {
    // redirect to quotes page
    this.props.history.push('/get-quotes');
  }

  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop = () => {
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className="home-container">
        {
          this.state.isContactUsModalOpen ?
          <ContactDetailsForm
            className="contact-us-modal"
            isOpen={this.state.isContactUsModalOpen}
            toggle={this.toggleModal}
            title="Contact Us"
          /> : ''
        }
        <div className="banner_section">
          <SliderBanner items={this.sliders}/>
        </div>
        <WhoAreWe />
        <Packages />
        <CoverSlider coverHeading='Our Featured Destinations' />
        <HelpMe onHelpMeClickHandler={this.toggleModal}/>
        <Testimonial />
      </div>
    );
  }
}

export default withRouter(Home);
