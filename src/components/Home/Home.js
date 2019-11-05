import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ContactDetailsForm, SliderBanner, CoverSlider } from '../../common/components/';
import HelpMe from './Sections/HelpMe';
import Testimonial from './Sections/Testimonial';
import WhoAreWe from './Sections/WhoAreWe';
import Packages from './Sections/Packages';
import Home_1 from '../../assets/images/home/Home_1.jpg';
import Home_2 from '../../assets/images/home/Home_2.jpg';
import Home_3 from '../../assets/images/home/Home_3.jpg';
import Home_4 from '../../assets/images/home/Home_4.jpg';
import Home_5 from '../../assets/images/home/Home_5.jpg';
import './Home.scss';

class Home extends Component {
    state = {
        isContactUsModalOpen: false
    };

    sliders = [{
        src: Home_1,
        altText: "Home_1",
        caption: "Enchanting Wilderness",
        // path: "Kenya"
    },{
        src: Home_2,
        altText: "Home_2",
        caption: "Exciting Safaris",
        // path: "Uganda"
    },{
        src: Home_3,
        altText: "Home_3",
        caption: "Enthralling Landscapes ",
        // path: "Tanzania"
    },{
        src: Home_4,
        altText: "Home_4",
        caption: "Ecstatic vibes",
        // path: "Tanzania"
    },{
        src: Home_5,
        altText: "Home_5",
        caption: "Enticing Destinations",
        // path: "Tanzania"
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
                        title="Contact Us"/> : ''
                }
                <div className="banner_section">
                    <SliderBanner items={this.sliders}/>
                </div>
                <WhoAreWe />
                <Packages />
                <CoverSlider />
                <HelpMe onHelpMeClickHandler={this.toggleModal}/>
                <Testimonial />
            </div>
        );
    }
}

export default withRouter(Home);
