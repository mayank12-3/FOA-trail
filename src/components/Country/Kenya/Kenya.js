import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { Banner, InfoCard, Tabs, ContactDetailsForm, Itinerary } from '../../../common/components/';
import _ from 'lodash';
import WhyThePackage from './Sections/WhyThePackage';
import PackageIncludes from './Sections/PackageIncludes';
import HelpMe from '../../Home/Sections/HelpMe';
// import { getQuestions } from './api/getQuotesApi';
import  WhyUs  from '../../Home/Sections/WhyUs'
import HowDoesItWork from '../sections/HowDoesItWork';
import quotes from '../../../utils/quotes.json';
import itinerary from '../../../utils/itinerary.json';
import './Kenya.scss';

class Kenya extends Component {
  state = {
    options: {...quotes.Kenya},
    tabs: [],
    isContactUsModalOpen: false,
    isButtonDisabled: true,
    itinerary: []
  };

  quoteRef = React.createRef();

  scrollToQuote = () => {
    window.scrollTo({ top: this.quoteRef.current.offsetTop,left: 100, behavior: "smooth"});
  }

  Kenya = () => {}

  componentDidMount() {
    this.setTabs();
    this.setItinerary();
    this.scrollToTop();
    // getQuestions()
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error));
  }

  setItinerary = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    const _itinerary = itinerary.filter(data => data.country === country);
    this.setState({
      itinerary: [..._itinerary]
    });
  }

  scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  toggleModal = (pckgDetails) => {
    this.setState({
      isContactUsModalOpen: !this.state.isContactUsModalOpen,
      packageDetails: !this.state.isContactUsModalOpen && pckgDetails
    });
  }

  setTabs = (moveTab = false) => {
    const tabs = [{
      title: 'Step 1',
      name: 'parks',
      isActive: false,
      component: this._getTabComponent(1)
    }, {
      title: 'Step 2',
      name: 'partyOptions',
      isActive: false,
      component: this._getTabComponent(2)
    }, {
      title: 'Step 3',
      name: 'accommodation',
      isActive: false,
      component: this._getTabComponent(3)
    }, {
      title: 'Step 4',
      name: 'days',
      isActive: false,
      component: this._getTabComponent(4)
    }, {
      title: 'Step 5',
      name: 'season',
      isActive: false,
      component: this._getTabComponent(5)
    }];

    let activeTabIndex = this._getActiveTabIndex();
    activeTabIndex = activeTabIndex === -1 ? 0 : activeTabIndex;
    tabs[activeTabIndex].isActive = true;
    this.setState({
      tabs
    }, () => {
      if (moveTab) {
        this.onNextTab();
      }
    });
  }

  onNextTab = () => {
    const oldIndex = this._getActiveTabIndex();
    if (oldIndex !== (this.state.tabs.length - 1)) {
      const newIndex = oldIndex + 1;
      //deactive old tab
      this._activeDeactiveTab(oldIndex, false);
      //active new tab
      this._activeDeactiveTab(newIndex, true);
    } else {
      this.onFinish();
    }
  }

  onPreviousTab = () => {
    const oldIndex = this._getActiveTabIndex();
    const newIndex = oldIndex - 1;
    // deactive old tab
    this._activeDeactiveTab(oldIndex, false);
    // active new tab
    this._activeDeactiveTab(newIndex, true);
  }

  onFinish = () => {
    this.toggleModal({
      ...this.state.options,
      isCustomItinerary: true
    });
  }

  onTabChange = (index = 0) => {
    const oldIndex = this._getActiveTabIndex();
    const _changeTab = () => {
      // deactive old tab
      this._activeDeactiveTab(oldIndex, false);
      // active new tab
      this._activeDeactiveTab(index, true);
    }

    if (!this.state.isButtonDisabled) {
      // If Button is enable, user can move previous and only one step next
      if ((index < oldIndex) || ((oldIndex + 1) === index)) {
        _changeTab();
      }
    } else {
      // If Button is disabled, user can move previous only
      if (index < oldIndex) {
         _changeTab();
      }
    }
  }

  renderOptions = (options = [], name) => {
    return options.map((data, i) => {
      const thumbnailImageSrc = data.image ? require(`../../../assets/images/kenya-custom-quote/${data.image}`) : '';
      return (
        <Col sm="4" md="3" xs="12" key={i} onClick={() => this.optionsChangeHandler(name, data.id)}>
          <InfoCard
            src={thumbnailImageSrc}
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
    let ifAnySelected = !!selectedOptionType.find(opt => (opt.isSelected))
    // const selectedOption = selectedOptionType.find(option => option.id === id);
    // selectedOption.isSelected = !selectedOption.isSelected;
    this.setState({
      options: {
        ...this.state.options,
      }
    }, () => {
      // const isButtonDisabled = _.chain(selectedOptionType).filter(option => option.isSelected).isEmpty().value();
      this.setTabs(false);
      this.enabledDisabledNextButton(ifAnySelected);
      // this.onNextTab()
    });
  }

  enabledDisabledNextButton = (flg) => {
    const options = { ...this.state.options };
    const activeTabIndex = this._getActiveTabIndex();
    const name = this.state.tabs[activeTabIndex].name;
    const currentOptionType = options[name];
    const isButtonDisabled = _.chain(currentOptionType).filter(option => option.isSelected).isEmpty().value();
    this.setState({
      isButtonDisabled
    }, () => {
      flg && this.onNextTab()
    });
  }

  render() {
    return (
      <div className="kenya_container">
        {
          this.state.isContactUsModalOpen ?
          <ContactDetailsForm
            packageDetails={this.state.packageDetails}
            className="contact-us-modal"
            isOpen={this.state.isContactUsModalOpen}
            toggle={this.toggleModal}
            title="Contact Us"/> : ''
        }
        <Banner
          className="kenya-banner"
          bannerText="Begin Your Perfect Kenya Safari"
          buttonText="Plan My Safari"
          buttonHandler={this.scrollToQuote}
        />
        <HowDoesItWork />
        <div className="tabs" ref={this.quoteRef}>
          <div className="wrapper">
            <Tabs
              title="Get Started"
              subHeader="Let’s work together for the buzzworthy experience"
              tabs={this.state.tabs}
              onNext={this.onNextTab}
              onPrev={this.onPreviousTab}
              onFinish={this.onFinish}
              onTabChange={this.onTabChange}
              finishText="Get Quote"
              hideNextButton={false}
              disabledNextButton={this.state.isButtonDisabled}
            />
          </div>
        </div>
        <PackageIncludes />
        {/* {
          this.state.itinerary.length > 0 ?
          <div className='itinerary-container'>
            <h2>Our Featured Tours</h2>
            <Itinerary itinerary={this.state.itinerary}
              getQuoteHandler={(pckgDetails) => this.toggleModal(pckgDetails)} />
          </div>
          : ''
        } */}
        <WhyThePackage />
        <HelpMe onHelpMeClickHandler={this.toggleModal} />
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
    },() => {
      this.enabledDisabledNextButton();
    });
  }

  _getTabComponent = (step) => {
    switch (step) {
      case 1:
        return (
          <Col sm="12" className="odd-question">
            <h2>Which park do you want to visit?</h2>
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
            <h2>How Big is your Group?</h2>
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
            <h2>What category of accommodation are you looking for?</h2>
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
            <h2>How many days on safari are you planning for?</h2>
            <Row className="parks">
              {
                this.renderOptions(this.state.options.days, "days")
              }
            </Row>
          </Col>
        );
      case 5:
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

export default Kenya;
