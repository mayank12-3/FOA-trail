import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Banner, InfoCard, Tabs, ContactDetailsForm, Itinerary } from '../../common/components/';
import _ from 'lodash';
import WhyUs from '../Home/Sections/WhyUs';
import HelpMe from '../Home/Sections/HelpMe';
import { getQuestions } from './api/getQuotesApi';
import './GetQuotes.scss';

class GetQuotes extends Component {
    state = {
        options: {
            parks: [{
                id: 1,
                title: "YET TO DECIDE",
                description: "We will suggest you based on your plan dates & duration"
            }, {
                id: 2,
                title: "MASAI MARA NP",
                description: "Kenya’s most famous park where the million Wildebeest march"
            }, {
                id: 3,
                title: "LAKE NAKURU NP",
                description: "Family friendly park with great lake views, flamingos and big 4."
            }, {
                id: 4,
                title: "AMBOSELI NP",
                description: "Huge Elephant herds in the shadow of Kilimanjaro"
            }, {
                id: 5,
                title: "SAMBURU NR",
                description: "Spot Lions, Giraffes, Zebras, Oryxs in this Serene riverside reserve."
            }, {
                id: 6,
                title: "TSAVO NP",
                description: "Red elephants, large lion prides and vast plains"
            }, {
                id: 7,
                title: "LAKE NAIVASHA",
                description: "Best place for Bird watching. Boating along with Game drives is possible"
            }],
            partyOptions: [{
                id: 1,
                title: "SOLO",
                description: "single"
            }, {
                id: 2,
                title: "COUPLE",
                description: "Only two people"
            }, {
                id: 3,
                title: "SMALL GROUP",
                description: "3 to 4 people"
            }, {
                id: 4,
                title: "BIG GROUP",
                description: "5 or more"
            }],
            accommodation: [{
                id: 1,
                title: "BUDGET",
                description: "Budget safari tours cost 100-150 USD per day, all inclusive"
            }, {
                id: 2,
                title: "MID-RANGE",
                description: "Mid range Safari tours cost 180-250 USD per day, all inclusive"
            }, {
                id: 3,
                title: "LUXURY LODGES",
                description: "Luxury Safari trips start from 300 USD per day, all inclusive"
            }],
            days: [{
                id: 1,
                title: "2",
                description: "2 Days"
            }, {
                id: 2,
                title: "3 to 4",
                description: "3 to 4 Days"
            }, {
                id: 3,
                title: "5 to 6",
                description: "5 to 6 Days"
            }, {
                id: 4,
                title: "7 to 9",
                description: "7 to 9 Days"
            }],
            type: [{
                id: 1,
                title: "PRIVATE SAFARI",
                description: "Your party will have the sole use of vehicle & full attention of guide."
            }, {
                id: 2,
                title: "GROUP SAFARI",
                description: "Join existing groups to save costs. Up-to 6 clients can share the vehicle"
            }],
            season: [{
                id: 1,
                title: "JUL to OCT",
                description: "PEAK SEASON"
            }, {
                id: 2,
                title: "NOV to MAR",
                description: "HIGH SEASON"
            }, {
                id: 3,
                title: "APR to JUN",
                description: "LOW SEASON"
            }]
        },
        tabs: [],
        isContactUsModalOpen: false
    };

    getQuotes = () => {

    }

    componentDidMount() {
        this.setTabs();
        this.scrollToTop();
        getQuestions()
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
    }

    scrollToTop = () => {
        window.scrollTo(0,0);
    }

    toggleModal = () => {
        this.setState({
            isContactUsModalOpen: !this.state.isContactUsModalOpen
        });
    }

    setTabs = (moveTab = false) => {
        const tabs = [{
            title: "Step 1",
            isActive: false,
            component: this._getTabComponent(1)
        }, {
            title: "Step 2",
            isActive: false,
            component: this._getTabComponent(2)
        }, {
            title: "Step 3",
            isActive: false,
            component: this._getTabComponent(3)
        }, {
            title: "Step 4",
            isActive: false,
            component: this._getTabComponent(4)
        }, {
            title: "Step 5",
            isActive: false,
            component: this._getTabComponent(5)
        }, {
            title: "Step 6",
            isActive: false,
            component: this._getTabComponent(6)
        }];

        let activeTabIndex = this._getActiveTabIndex();
        activeTabIndex = activeTabIndex === -1 ? 0 : activeTabIndex;
        tabs[activeTabIndex].isActive = true;
        this.setState({
            tabs
        }, () => {
            if(moveTab) {
                this.onNextTab();
            }
        });
    }

    onNextTab = () => {
        const oldIndex = this._getActiveTabIndex();
        if(oldIndex !== (this.state.tabs.length - 1)) {
            const newIndex = oldIndex + 1;
            //deactive old tab
            this._activeDeactiveTab(oldIndex, false);
            //active new tab
            this._activeDeactiveTab(newIndex, true);
        }
    }

    onPreviousTab = () => {
        const oldIndex = this._getActiveTabIndex();
        const newIndex = oldIndex - 1;
        //deactive old tab
        this._activeDeactiveTab(oldIndex, false);
        //active new tab
        this._activeDeactiveTab(newIndex, true);
    }

    onFinish = () => {
        this.toggleModal();
    }

    onTabChange = (index = 0) => {
        const oldIndex = this._getActiveTabIndex();
        //deactive old tab
        this._activeDeactiveTab(oldIndex, false);
        //active new tab
        this._activeDeactiveTab(index, true);
    }

    renderOptions = (options = [], name) => {
        return options.map((data, i) => {
            return (
                <Col sm="3" key={i} onClick={() => this.optionsChangeHandler(name, data.id)}>
                    <InfoCard
                        className={data.isSelected ? 'active' : ''}
                        title={data.title}
                        description={data.description}
                        subHeader={data.subHeader}
                    />
                </Col>
            )
        });
    }

    optionsChangeHandler = (name, id) => {
        const options = { ...this.state.options };
        let selectedOptionType = options[name];
        selectedOptionType = selectedOptionType.map(option => {
            option.isSelected = (option.id === id) ? !option.isSelected : false;
            return option;
        });
        // const selectedOption = selectedOptionType.find(option => option.id === id);
        // selectedOption.isSelected = !selectedOption.isSelected;
        this.setState({
            options: {
                ...this.state.options,
                [name]: [...selectedOptionType]
            }
        }, () => {
            const movetab = _.chain(selectedOptionType).filter(option => option.isSelected).isEmpty().value();
            this.setTabs(!movetab);
        });
    }

    render() {
        return (
            <div className="get-quotes_container">
                {
                    this.state.isContactUsModalOpen ?
                    <ContactDetailsForm 
                        className="contact-us-modal"
                        isOpen={this.state.isContactUsModalOpen} 
                        toggle={this.toggleModal}
                        title="Contact Us"/> : ''
                }
                <div className="banner_section">
                    <Banner
                        className="quotes-banner"
                        bannerText="Let’s work together for the buzzworthy experiernce"
                    />
                </div>
                <div className="tabs">
                    <div className="wrapper">
                        <Tabs
                            title="Get Started"
                            subHeader="Let’s work together for the buzzworthy experiernce"
                            tabs={this.state.tabs}
                            onNext={this.onNextTab}
                            onPrev={this.onPreviousTab}
                            onFinish={this.onFinish}
                            onTabChange={this.onTabChange}
                            finishText="Contact Us"
                            hideNextButton={false}
                        />
                    </div>
                </div>
                <Itinerary />
                <HelpMe onHelpMeClickHandler={this.toggleModal}/>
                <WhyUs />
            </div>
        );
    }

    _getActiveTabIndex = () => {
        return this.state.tabs.findIndex(tab => tab.isActive === true);
    }

    _activeDeactiveTab = (tabIndex = 0, isActive = true) => {
        const tabs = [...this.state.tabs];
        const tab = tabs[tabIndex];
        tab.isActive = isActive;
        this.setState({
            tabs
        });
    }

    _getTabComponent = (step) => {
        switch (step) {
            case 1:
                return (
                    <Col sm="12" className="odd-question">
                        <h2>Which parks do you want to visit?</h2>
                        <Row className="parks">
                            {
                                this.renderOptions(this.state.options.parks, "parks")
                            }
                        </Row>
                    </Col>
                )
            case 2:
                return (
                    <Col sm="12">
                        <h2>How big is your party?</h2>
                        <Row className="parks">
                            {
                                this.renderOptions(this.state.options.partyOptions, "partyOptions")
                            }
                        </Row>
                    </Col>
                );
            case 3:
                return (
                    <Col sm="12" className="odd-question">
                        <h2> What type of Accommodation are you looking for?</h2>
                        <Row className="parks">
                            {
                                this.renderOptions(this.state.options.accommodation, "accommodation")
                            }
                        </Row>
                    </Col>
                );
            case 4:
                return (
                    <Col sm="12">
                        <h2>How many days of Safari are you planning?</h2>
                        <Row className="parks">
                            {
                                this.renderOptions(this.state.options.days, "days")
                            }
                        </Row>
                    </Col>
                );
            case 5:
                return (
                    <Col sm="12" className="odd-question">
                        <h2>Do you want a private safari or want to join group safari tour?</h2>
                        <Row className="parks">
                            {
                                this.renderOptions(this.state.options.type, "type")
                            }
                        </Row>
                    </Col>
                );
            case 6:
                return (
                    <Col sm="12">
                        <h2>When are you planning for the Safari?</h2>
                        <Row className="parks">
                            {
                                this.renderOptions(this.state.options.season, "season")
                            }
                        </Row>
                    </Col>
                );
            default: 
                return '';
        };
    }
}

export default GetQuotes;