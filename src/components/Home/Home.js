import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Banner, ContactDetailsForm } from '../../common/components/';
import HowDoesItWork from './Sections/HowDoesItWork';
import HelpMe from './Sections/HelpMe';
import WhyUs from './Sections/WhyUs';
// import Packages from './Sections/Packages';
import './Home.scss';

class Home extends Component {
    state = {
        isContactUsModalOpen: false
    };

    toggleModal = () => {
        this.setState({
            isContactUsModalOpen: !this.state.isContactUsModalOpen
        });
    }
    onGetStarted = () => {
        // redirect to quotes page
        this.props.history.push('/get-quotes');
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
                    <Banner 
                        className="home-banner"
                        bannerText="Plan Your Perfect Kenya Safari"
                        buttonText="Get Started"
                        buttonClassName="primary"
                        buttonHandler={this.onGetStarted}
                    />
                </div>
                <HowDoesItWork />
                {/* <Packages /> */}
                <HelpMe onHelpMeClickHandler={this.toggleModal}/>
                <WhyUs />
            </div>
        );
    }
}

export default withRouter(Home);