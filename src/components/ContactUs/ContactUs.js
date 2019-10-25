import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Banner, Button } from '../../common/components/';
import { Row, Col } from 'reactstrap';
import HowDoesItWork from '../Home/Sections/HowDoesItWork';
import { TextField } from '@material-ui/core';
import './ContactUs.scss';

class ContactUs extends Component {
    render() {
        return(
            <div className="contact-us-container">
                <div className="banner_section">
                    <Banner 
                        className="contact-banner"
                        bannerText="Plan Your Perfect Kenya Safari"
                        buttonText="Get Started"
                        buttonClassName="primary"
                        buttonHandler={this.onGetStarted}
                    />
                </div>
                <HowDoesItWork />
                <Row className="contact-us-body">
                    <Col sm="6" className="contact-us-image">
                    </Col>
                    <Col sm="6" className="conatct-us-form">
                        <div className="form-title">
                            <hr/>
                            <span>Contact Us</span>
                        </div>
                        <form>
                            <Col sm="12">
                                <TextField
                                    id="standard-text-input"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    className="contact-us-text"
                                    required
                                    autoComplete="off"
                                    margin="normal"
                                    maxLength="50"
                                />
                            </Col>
                            <Col sm="12">
                                <TextField
                                    required
                                    id="standard-email-input"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    className="contact-us-text"
                                    autoComplete="off"
                                    margin="normal"
                                    maxLength="150"
                                />
                            </Col>
                            <Col sm="12">
                                <TextField
                                    required
                                    id="standard-number-input"
                                    label="Contact Number"
                                    type="text"
                                    fullWidth
                                    className="contact-us-text"
                                    autoComplete="off"
                                    margin="normal"
                                    maxLength="10"
                                />
                            </Col>
                            <Col sm="12">
                            <TextField
                                id="standard-multiline-flexible"
                                label="Message"
                                fullWidth
                                className="contact-us-text"
                                multiline
                                rowsMax="4"
                                margin="normal"
                            />
                            </Col>
                            <Col sm="12" className="footer-button">
                            <Button
                                className="secondary"
                                onClick={this.props.toggle}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="primary"
                            >
                                Submit
                            </Button>
                            </Col>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withRouter(ContactUs);