import React, { Component } from 'react';
import { Col, Row, Card } from 'reactstrap';
import { Banner, EnquiryForm } from '../../common/components/';
import './PackageDetails.scss';
import packages from '../../utils/packages.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import {
    faClock,
    faCalendar,
    faCheck,
    faTimes,
    faCoffee,
    faUtensils,
    faUtensilSpoon,
    faCar
} from '@fortawesome/free-solid-svg-icons';

class PackageDetails extends Component {
    state = {
        packageDetails: {}
    };
    bannerStyle = {};

    componentDidMount() {
        this.setPackageDetails();
        this.scrollTop();
    }
    scrollTop = () => {
        window.scrollTo(0, 0);
    }
    setPackageDetails = () => {
        if (window.location.search) {
            const urlParams = new URLSearchParams(window.location.search);
            const packageId = urlParams.get('id');
            const _package = packages.find(data => data.package_id === parseInt(packageId));
            this.setBannerStyle(_package);
            this.setState({
                packageDetails: { ..._package }
            });
        }
    }

    setBannerStyle = (data) => {
        const bannerImageSrc = data.banner ? require(`../../assets/images/packages/${data.banner}`) : '';
        this.bannerStyle = {
            background: `url(${bannerImageSrc}) no-repeat`,
        }
    }

    renderSteps = (steps = []) => {
        return steps.map((step, index) => {
            return (
                <div className="step" key={index}>
                    <h3>{`${step.day} - ${step.title}`}</h3>
                    <p>{step.details}</p>
                    <div className="other-details_step">
                        {
                            step.accommodation ?
                                this.renderAccommodation(step.accommodation) : ''
                        }
                        {
                            step.drivingtime ?
                                this.renderDrivingtime(step.drivingtime) : ''
                        }
                        {
                            step.meals ?
                                this.renderMeals(step.meals) : ''
                        }
                    </div>
                </div>
            );
        });
    }

    renderDrivingtime = (drivingtime = '') => {
        return (
            <div className="driving-time">
                <FontAwesomeIcon icon={faCar} />
                <span>{drivingtime}</span>
            </div>
        );
    }

    renderMeals = (meals = '') => {
        meals = meals.split(',');
        return (
            <div className="meals">
                <ul>
                    {
                        meals.map((meal, i) => {
                            meal = meal.trim();
                            return (
                                <li key={i}>
                                    <FontAwesomeIcon icon={meal === 'B' ? faCoffee : meal === 'L' ? faUtensilSpoon : faUtensils} />
                                    <span>
                                        {meal === 'B' ? "Breakfast" : meal === 'L' ? "Lunch" : "Dinner"}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

    renderAccommodation = (accommodation) => {
        return (
            <div className="accommodation">
                <p><strong>Accommodation: </strong>{accommodation}</p>
            </div>
        );
    }

    renderIncludes = (includes = []) => {
        return includes.map((include, i) => {
            return (
                <Col sm="12" md="6" key={`${include}_${i}`} className="add-ons">
                    <FontAwesomeIcon icon={faCheck} />
                    <p>{include}</p>
                </Col>
            );
        });
    }

    renderExcludes = (excludes = []) => {
        return excludes.map((exclude, i) => {
            return (
                <Col sm="12" md="6" key={`${exclude}_${i}`} className="add-ons">
                    <FontAwesomeIcon icon={faTimes} />
                    <p>{exclude}</p>
                </Col>
            );
        });
    }

    renderFeaturedTours = () => {
        const selectedPackage = { ...this.state.packageDetails };
        const relatedPackages = packages.filter(_package => _package.package_id !== selectedPackage.package_id
            && _package.country === selectedPackage.country);
        return relatedPackages.map((data, i) => {
            const thumbnailImageSrc = data.thumbnail ? require(`../../assets/images/packages/${data.thumbnail}`) : '';
            return (
                <div key={i} className="featured-tours" onClick={() => this._redirectFromFeature(data)}>
                    <p>Featured Tours</p>
                    <div className="packages">
                        <Card>
                            <img src={thumbnailImageSrc} alt={data.title} />
                            <p>{data.title}</p>
                        </Card>
                    </div>
                </div>
            );
        });
    }

    _redirectFromFeature = (data = {}) => {
        this.setBannerStyle(data);
        this.props.history.push(`/details?package=${data.title}&id=${data.package_id}`);
        this.setState({
            packageDetails: { ...data }
        }, () => {
            this.scrollTop();
        });
    }

    render() {
        const packageDetails = { ...this.state.packageDetails };
        return (
            <div className="package-details_container">
                <Banner
                    style={{...this.bannerStyle}}
                    className="quotes-banner"
                    bannerText=""
                />
                <div className="wrapper">
                    <Row className="details">
                        <Col sm="12" md="8">
                            <div className="details_title">
                                <h2>{packageDetails.title}</h2>
                            </div>
                            <div className="details_extras">
                                <div>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span>{packageDetails.duration}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span>{packageDetails.calender}</span>
                                </div>
                            </div>
                            <div className="details_description">
                                <p>{packageDetails.overview}</p>
                            </div>
                            <div className="details_steps">
                                {
                                    this.renderSteps(packageDetails.itinerary)
                                }
                            </div>
                            <div className="other-details">
                                <div className="title">
                                    <span>Included</span>
                                </div>
                                <div className="description">
                                    <Row>
                                        {
                                            this.renderIncludes(packageDetails.includes)
                                        }
                                    </Row>
                                </div>
                            </div>
                            <div className="other-details">
                                <div className="title">
                                    <span>Exluded</span>
                                </div>
                                <div className="description">
                                    <Row>
                                        {
                                            this.renderExcludes(packageDetails.excludes)
                                        }
                                    </Row>
                                </div>
                            </div>
                            {/* <div className="other-details">
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
                            </div> */}
                        </Col>
                        <Col sm="12" md="4">
                            <Card>
                                <EnquiryForm packageDetails={packageDetails} />
                            </Card>
                            {
                                this.renderFeaturedTours()
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withRouter(PackageDetails);
