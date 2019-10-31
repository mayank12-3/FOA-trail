import React, { Component } from 'react';
import { Col, Row, Card } from 'reactstrap';
import { Banner, EnquiryForm } from '../../common/components/';
import Package1 from '../../assets/images/Package_1.jpg';
import Package2 from '../../assets/images/Package_2.jpg';
import Package3 from '../../assets/images/Package_3.jpg';
import './PackageDetails.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faCalendar, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

class PackageDetails extends Component {
    state= {
        packageTitle: "Cape Town & Kruger Safari",
        duration: "7 Days",
        calender: "All Month",
        packageDescription: "From the cosmopolitan sophistication of Cape Town to the wilds of the Kruger National Park, this tailor-made tour takes in the best of both worlds. Spend a few days soaking up some Mother City charm before embarking on a classic safari in the gem of South Africa’s wildlife crown. From majestic mountains to Big Five game viewing, you will be spoiled and spellbound.",
        steps: [{
            title: "Days 1 – 3: Cape Town Highlights",
            description: "South Africa’s Mother City is a destination for everyone, with inner-city adventures, outdoor escapades and cultural experiences to discover around every corner. Visit the V&A Waterfront, summit Table Mountain, tour historical landmarks or treat your taste buds to a culinary feast – and all this before you have even left the city centre!.Further afield, go wine tasting in the Cape Winelands, whale watching in Hermanus (between July and November), people-watching at one of Cape Town’s famed beaches, or spend a day exploring the ruggedly beautiful Cape Peninsula."
        }, {
            title: "Days 4 – 7: Kruger National Park & Surrounds",
            description: "With some of the best wildlife sightings in the world on offer, a Kruger Park safari is genuinely one of South Africa’s top experiences. Explore this legendary game reserve over three days, taking in thrilling wildlife encounters on guided open vehicle game drives seeking out the ‘Big Five’, general game and prolific bird life.Explore the nearby Panorama Route to take in its forested mountains and fertile plains. Be awed with views of the Blyde River Canyon (home to the Three Rondavels), Bourke’s Luck Potholes and God’s Window."
        }]
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
    renderSteps = () => {
        return this.state.steps.map((step, index) => {
            return(
                <div className="step" key={index}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
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
