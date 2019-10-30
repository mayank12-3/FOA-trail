import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { Banner } from '../../common/components';
import { Row, Col } from 'reactstrap';
import './AboutUs.scss';

class AboutUs extends Component {
    render() {
        return(
            <div className="contact-us-container">
                {/* <div className="banner_section">
                    <Banner 
                        className="contact-banner"
                        bannerText="Plan Your Kenya Safari"
                        // buttonText="Get Started"
                        // buttonClassName="primary"
                        // buttonHandler={this.onGetStarted}
                    />
                </div> */}
                <Row className="about-us-body">
                    <Col className="sm-12">
                        <div className="form-title">
                            <span>About Us</span>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.

                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.

                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.

                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software
                                like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                   </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(AboutUs);