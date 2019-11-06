import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import Button from '../Button/Button';
import Validate from '../../../utils/validate';
import './EnquiryForm.scss';

class EnquiryForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        numberOfTravellers: '',
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
            case 'firstName':
            case 'lastName':
                return Validate.Text(value);
            case 'contactNumber':
            case 'numberOfTravellers':
                return Validate.Number(value);
            default:
                return true;
        }
    }

    enableDisableSubmitButton = () => {
        const isButtonDisabled = (this.state.firstName && this.state.lastName && this.state.email && this.state.contactNumber && this.state.numberOfTravellers) ? false : true;
        this.setState({
            isButtonDisabled
        });
    }
    onSubmit = () => {
        console.log('props', this.props)
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
        return (
            <div className="enquiry-form_container">
                <form  noValidate autoComplete="off">
                    <Row>
                        <Col sm="12">
                            <TextField
                                label="First Name"
                                type="text"
                                fullWidth
                                name="firstName"
                                className="contact-us-text"
                                required
                                autoComplete="off"
                                margin="normal"
                                onChange={this.onChangeHandler}
                                inputProps={{ maxLength: 50 }}
                                value={this.state.firstName}
                            />
                        </Col>
                        <Col sm="12">
                            <TextField
                                label="Last Name"
                                type="text"
                                fullWidth
                                name="lastName"
                                className="contact-us-text"
                                required
                                autoComplete="off"
                                margin="normal"
                                onChange={this.onChangeHandler}
                                inputProps={{ maxLength: 50 }}
                                value={this.state.lastName}
                            />
                        </Col>
                        <Col sm="12">
                            <TextField
                                error={this.state.isError && !Validate.Email(this.state.email)}
                                helperText={this.state.isError && !Validate.Email(this.state.email) ? "Invalid Email" : ''}
                                required
                                id="standard-email-input"
                                label="Email"
                                type="email"
                                name="email"
                                fullWidth
                                className="contact-us-text"
                                autoComplete="off"
                                margin="normal"
                                onChange={this.onChangeHandler}
                                inputProps={{ maxLength: 150 }}
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
                                fullWidth
                                className="contact-us-text"
                                autoComplete="off"
                                margin="normal"
                                onChange={this.onChangeHandler}
                                inputProps={{ maxLength: 10 }}
                                value={this.state.contactNumber}
                            />
                        </Col>
                        <Col sm="12">
                        <TextField
                                required
                                id="standard-number-input"
                                label="Number of Travellers"
                                type="text"
                                name="numberOfTravellers"
                                fullWidth
                                className="contact-us-text"
                                autoComplete="off"
                                margin="normal"
                                onChange={this.onChangeHandler}
                                inputProps={{ maxLength: 3 }}
                                value={this.state.numberOfTravellers}
                            />
                        </Col>
                        <Col sm="12">
                            <TextField
                                id="standard-multiline-flexible"
                                label="Message"
                                fullWidth
                                name="message"
                                className="contact-us-text"
                                multiline
                                rowsMax="4"
                                margin="normal"
                                onChange={this.onChangeHandler}
                                inputProps={{ maxLength: 2000 }}
                                value={this.state.message}
                            />
                            </Col>
                        <Col sm="12">
                            <Button
                                disabled={this.state.isButtonDisabled}
                                className="primary"
                                onClick={this.onSubmit}
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
