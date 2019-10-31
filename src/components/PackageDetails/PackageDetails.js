import React, { Component } from 'react';
import { Col, Row, Card } from 'reactstrap';
import { Banner, EnquiryForm } from '../../common/components/';
import Package1 from '../../assets/images/Package_1.jpg';
import Package2 from '../../assets/images/Package_2.jpg';
import Package3 from '../../assets/images/Package_3.jpg';
import './PackageDetails.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import packagesJson from '../../utils/packages.json'

class PackageDetails extends Component {
    state= packagesJson.find(info => (info.title === this.props.location.search.replace(/%20/g, ' ').split('=')[1]))

    componentDidMount() {
        window.scrollTo(0,0);
    }
    renderSteps = () => {
        return this.state.itinerary.map((step, index) => {
            return(
                <div className="step" key={index}>
                    <h3>{step.day}</h3>
                    <p>{step.details}</p>
                </div>
            );
        });
    }

    render() {
        console.log(this.props)
        return(
            <div className="package-details_container">
                <Banner
                    className="quotes-banner"
                    bannerText=""
                />
                <div className="wrapper">
                    <Row className="details">
                        <Col sm="12" md="8">
                            <div className="details_title">
                                <h2>{this.state.packageTitle}</h2>
                            </div>
                            <div className="details_extras">
                                <div>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>{this.state.duration}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span>{this.state.calender}</span>
                                </div>
                            </div>
                            <div className="details_description">
                                <p>{this.state.packageDescription}</p>
                            </div>
                            <div className="details_steps">
                                {
                                    this.renderSteps()
                                }
                            </div>
                            <div className="other-details">
                                <div className="title">
                                    <span>Included</span>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li className="add-ons">
                                            <FontAwesomeIcon icon={faCheck} />
                                            <p>Destination highlights as per the itinerary</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="other-details">
                                <div className="title">
                                    <span>Exluded</span>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li className="add-ons">
                                            <FontAwesomeIcon icon={faTimes} />
                                            <p>Flights and transfers not mentioned in the itinerary</p>
                                        </li>
                                        <li className="add-ons">
                                            <FontAwesomeIcon icon={faTimes} />
                                            <p>Meals & drinks not mentioned in the itinerary</p>
                                        </li>
                                        <li className="add-ons">
                                            <FontAwesomeIcon icon={faTimes} />
                                            <p>Optional activities and excursions</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="other-details">
                                <div className="title">
                                    <span>Map</span>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li>
                                            <p>Not Available</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md="4">
                            <Card>
                                <EnquiryForm />
                            </Card>
                            <div className="featured-tours">
                                <p>Featured Tours</p>
                                <Row className="packages">
                                  <Col sm="6" xs="12" md="12">
                                    <Card>
                                        <img src={Package1} alt="Package1"/>
                                        <p>Package1</p>
                                    </Card>
                                  </Col>
                                  <Col sm="6" xs="12" md="12">
                                    <Card>
                                        <img src={Package2} alt="Package2"/>
                                        <p>Package2</p>
                                    </Card>
                                  </Col>
                                  <Col sm="6" xs="12" md="12">
                                    <Card>
                                        <img src={Package3} alt="Package3"/>
                                        <p>Package3</p>
                                    </Card>
                                  </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default PackageDetails;
