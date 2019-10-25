import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ContactDetailsForm, SliderBanner } from '../../common/components/';
import HowDoesItWork from './Sections/HowDoesItWork';
import HelpMe from './Sections/HelpMe';
import WhyUs from './Sections/WhyUs';
import WhoAreWe from './Sections/WhoAreWe';
import Packages from './Sections/Packages';
import KenyaImg from '../../assets/images/home_banner.jpg';
import UgandaImg from '../../assets/images/uganda.jpg';
import TanzaniaImg from '../../assets/images/tanzania.jpg';

import './Home.scss';

class Home extends Component {
    state = {
        isContactUsModalOpen: false
    };

    sliders = [{
        src: KenyaImg,
        altText: "Kenya",
        caption: "Kenya",
        path: "Kenya"
    },{
        src: UgandaImg,
        altText: "Uganda",
        caption: "Uganda",
        path: "Uganda"
    },{
        src: TanzaniaImg,
        altText: "Tanzania",
        caption: "Tanzania",
        path: "Tanzania"
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
                    {/* <Banner 
                        className="home-banner"
                        bannerText="Plan Your Perfect Kenya Safari"
                        buttonText="Get Started"
                        buttonClassName="primary"
                        buttonHandler={this.onGetStarted}
                    /> */}
                    <SliderBanner items={this.sliders}/>
                </div> 
                <WhoAreWe />
                <HowDoesItWork />
                <Packages />
                <HelpMe onHelpMeClickHandler={this.toggleModal}/>
                <WhyUs />
            </div>
        );
    }
}

export default withRouter(Home);
