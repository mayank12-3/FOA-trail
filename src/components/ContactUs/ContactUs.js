import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Banner, Button, ThankYouPopUp } from '../../common/components/';
import { Row, Col } from 'reactstrap';
// import HowDoesItWork from '../Home/Sections/HowDoesItWork';
import { TextField } from '@material-ui/core';
import Validate from '../../utils/validate';
import { contactUs } from '../../common/Api/commonApi';
import './ContactUs.scss';

class ContactUs extends Component {
    state = {
        name: '',
        email: '',
        contactNumber: '',
        message: '',
        isError: false,
        isButtonDisabled: true,
        showThankyouPopup: true
    };

    componentDidMount() {
        this.scrollToTop();
    }


    scrollToTop = () => {
        window.scrollTo(0,0);
    }

    onChangeHandler = (e) => {
        let { name, value } = e.target;
        value = value.trim() !== '' ? value : '';

        if (this.isValueValid(name, value)) {
            this.setState({
                [name]: value,
                isError: false
            }, () => {
                this.enableDisableSubmitButton();
            });
        }
    }

    isValueValid = (name, value) => {
        switch (name) {
            case 'name':
                return Validate.Text(value);
            case 'contactNumber':
                return Validate.Number(value);
            default:
                return true;
        }
    }

    getInTouchRef = React.createRef();

    getInToucb = () => {
        window.scrollTo({ top: this.getInTouchRef.current.offsetTop,left: 100, behavior: 'smooth'});
    }

    enableDisableSubmitButton = () => {
        const isButtonDisabled = (this.state.name && this.state.email && this.state.contactNumber) ? false : true;
        this.setState({
            isButtonDisabled
        });
    }
    onSubmit = () => {
        if (Validate.Email(this.state.email) && this.state.contactNumber.length === 10) {
            // const payload = {
            //     "text": "\n Name - " + this.state.name + "\n Email - " + this.state.email +
            //     "\n Phone - " + this.state.contactNumber + "\n Message - " + this.state.message
            // };

            const payload = {
                "text": ":star: Yo nigga! you got a submission.",
                "blocks": [
                    {
                        "type": "section",
                        "block_id": "section567",
                        "text": {
                            "type": "mrkdwn",
                            "text": "<https://www.fullofafrica.com/|Overlook> \n Name - " + this.state.name + "\n Email - " + this.state.email +
                                "\n Phone - " + this.state.contactNumber + "\n Message - " + this.state.message
                        },
                        "accessory": {
                            "type": "image",
                            "image_url": "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
                            "alt_text": "Full of Arica"
                        }
                    },
                ]
            }

            contactUs(payload)
                .then(resp => {
                  console.log(resp)
                  this.setState({
                    showThankyouPopup: true
                  })
                })
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
        return (
            <div className="contact-us-container">
                {this.state.showThankyouPopup && <ThankYouPopUp isOpen={true}
                  toggle={() => {
                    this.setState({ showThankyouPopup: !this.state.showThankyouPopup })
                  }} />
                }
                <div className="banner_section">
                    <Banner
                        className="contact-banner"
                        bannerText='"The only man I envy is the man who has not yet been to Africa – for he has so much to look forward to.” - Richard Mullin'
                        buttonText="Get In Touch"
                        buttonClassName="primary"
                        buttonHandler={this.getInToucb}
                    />
                </div>
                {/* <HowDoesItWork /> */}
                <div className="wrapper" ref={this.getInTouchRef}>
                    <Row className="contact-us-body">
                        <Col sm="6" className="contact-us-image">
                            <h2>How Can We Help?</h2>
                            <p>Question not answered yet? We are here to help!</p>
                            <p>Have any Special Requirements?</p>
                            <p>Is your trip for any occasion like a honeymoon or anniversary?</p>
                            <p>Seeking answers to your queries about Itinerary, food, vehicle, visa process, etc?</p>
                            <p>Run into the Safari Expert now!</p>
                            <div className="contact-details">
                                <p>+91 95918 81292</p>
                                <p>travel@fullofafrica.com</p>
                            </div>
                        </Col>
                        <Col sm="6" className="conatct-us-form">
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
                </div>
            </div >
        );
    }
}

export default withRouter(ContactUs);
