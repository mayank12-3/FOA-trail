import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import Button from '../Button/Button';
import './EnquiryForm.scss';

class EnquiryForm extends Component {
    render() {
        return (
            <div className="enquiry-form_container">
                <form  noValidate autoComplete="off">
                    <Row>
                        <Col sm="12">
                            <TextField
                                label="First Name"
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
                                label="Last Name"
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
                                required
                                id="standard-number-input"
                                label="Number of Travellers"
                                type="text"
                                fullWidth
                                className="contact-us-text"
                                autoComplete="off"
                                margin="normal"
                                maxLength="2"
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
                        <Col sm="12">
                            <Button
                                className="primary"
                            >
                                Enquiry Now
                            </Button>
                        </Col>
                    </Row>
                </form>
            </div>
        );
    }
}

export default EnquiryForm;