import React, { Component } from 'react';
import {
    Row,
    Col,
    Modal,
    ModalBody
} from 'reactstrap';
import Validate from '../../../utils/validate';
import { TextField } from '@material-ui/core';
import Button from '../Button/Button';
import { contactUs } from '../../../common/Api/commonApi';
import './ContactDetailsForm.scss';

class ContactDetailsForm extends Component {
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
            const payload = {
                "name": this.state.name,
                "email": this.state.email,
                "contactNumber": this.state.contactNumber,
                "message": this.state.message,
                "packageDetails": this.props.packageDetails
            }

            contactUs(payload)
                .then(resp => console.log(resp))
                .catch(error => console.log(error));
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
            <Modal
                className={this.props.className}
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
            >
            <ModalBody>
                <Row className="contact-modal-body">
                    <Col sm="6" className="modal-image">
                    </Col>
                    <Col sm="6" className="contact-us-form">
                        <div className="form-title">
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
            </ModalBody>
            </Modal>
        );
    }
}

export default ContactDetailsForm;
