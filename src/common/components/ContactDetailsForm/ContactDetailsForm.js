import React, { Component } from 'react';
import { 
    Row,
    Col,
    Modal,
    ModalBody
} from 'reactstrap';
import { TextField } from '@material-ui/core';
import Button from '../Button/Button';
import './ContactDetailsForm.scss';

class ContactDetailsForm extends Component {
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
                                    autoComplete="off"
                                    margin="normal"
                                    maxLength="10"
                                />
                            </Col>
                            <Col sm="12">
                            <TextField
                                id="standard-multiline-flexible"
                                label="Message"
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
            </ModalBody>
            </Modal>
        );
    }
}

export default ContactDetailsForm;