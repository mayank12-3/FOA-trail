import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Banner, Button } from '../../common/components/';
import { Row, Col } from 'reactstrap';
import HowDoesItWork from '../Home/Sections/HowDoesItWork';
import { TextField } from '@material-ui/core';
import Validate from '../../utils/validate';
import './ContactUs.scss';

class ContactUs extends Component {
    state = {
        name: '',
        email: '',
        contactNumber: '',
        message: '',
        isError: false,
        isButtonDisabled: true
    };
    onChangeHandler = (e) => {
        let { name, value } = e.target;
        value = value.trim() !== '' ? value : '';
        
        if(this.isValueValid(name, value) ) {
            this.setState({
                [name]: value,
                isError: false
            },() => {
                this.enableDisableSubmitButton();
            });
        }
    }

    isValueValid = (name, value) => {
        switch(name) {
            case 'name':
                return Validate.Text(value);
            case 'contactNumber':
                return Validate.Number(value);
            default: 
                return true;
        }
    }

    enableDisableSubmitButton = () => {
        const isButtonDisabled = (this.state.name && this.state.email && this.state.contactNumber) ? false : true;
        this.setState({
            isButtonDisabled
        });
    }
    onSubmit = () => {
        if(Validate.Email(this.state.email) && this.state.contactNumber.length === 10) {
            //Submit the form
            this.setState({
                isError: false
            });
        } else {
            this.setState({
                isError: true
            });
        }
    }
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
                                    name="name"
                                    required
                                    autoComplete="off"
                                    margin="normal"
                                    inputProps={{ maxLength: 50 }}
                                    onChange={this.onChangeHandler}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col sm="12">
                                <TextField
                                    error={this.state.isError && !Validate.Email(this.state.email)}
                                    helperText={this.state.isError && !Validate.Email(this.state.email) ? "Invalid Email" : ''}
                                    required
                                    id="standard-text-input"
                                    label="Email"
                                    type="text"
                                    name="email"
                                    autoComplete="off"
                                    margin="normal"
                                    inputProps={{ maxLength: 150 }}
                                    onChange={this.onChangeHandler}
                                    value={this.state.email}
                                />
                            </Col>
                            <Col sm="12">
                                <TextField
                                    error={this.state.isError && this.state.contactNumber.length < 10}
                                    helperText={this.state.isError && this.state.contactNumber.length < 10 ? "Invalid Contact Number" : ''}
                                    required
                                    id="standard-number-input"
                                    label="Contact Number"
                                    type="text"
                                    name="contactNumber"
                                    autoComplete="off"
                                    margin="normal"
                                    onChange={this.onChangeHandler}
                                    inputProps={{ maxLength: 10 }}
                                    value={this.state.contactNumber}
                                />
                            </Col>
                            <Col sm="12">
                            <TextField
                                id="standard-multiline-flexible"
                                label="Message"
                                multiline
                                name="message"
                                rowsMax="4"
                                margin="normal"
                                onChange={this.onChangeHandler}
                                inputProps={{ maxLength: 2000 }}
                                value={this.state.message}
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
                                onClick={this.onSubmit}
                                disabled={this.state.isButtonDisabled}
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