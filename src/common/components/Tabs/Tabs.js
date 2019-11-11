import React, { Component } from 'react';
import { Row } from 'reactstrap';
import {
    Card,
    CardHeader,
    CardContent
} from '@material-ui/core';
import Button from '../Button/Button';
import './Tabs.scss';

class Tabs extends Component {

    renderTabs = () => {
        const tabStyle = this.getTabStyle();
        return this.props.tabs ? this.props.tabs.map((tab, i) => {
            return (
                <li onClick={() => this.props.onTabChange(i)} key={i} style={tabStyle} className={tab.isActive ? 'active' : ''}>
                    <span>{tab.title}</span>
                </li>
            );
        }) : [];
    }

    getTabStyle = () => {
        const numberOfTabs = this.props.tabs.length;
        if (numberOfTabs) {
            const width = 100 / numberOfTabs;
            return {
                width: `${width}%`,
                height: '33px'
            }
        }
        return {};
    }

    getActiveSliderStyle = () => {
        const numberOfTabs = this.props.tabs.length;
        if (numberOfTabs) {
            const width = 100 / numberOfTabs;
            const activeTabIndex = this._getActiveTabIndex();
            return {
                width: `${width}%`,
                height: '33px',
                left: `${(width * activeTabIndex)}%`
            }
        }
        return {};
    }

    showPrevButton = () => {
        const activeIndex = this._getActiveTabIndex();
        return activeIndex !== 0;
    }

    showNextButton = () => {
        const activeIndex = this._getActiveTabIndex();
        const lengthOfTabs = this.props.tabs.length;
        return activeIndex < (lengthOfTabs - 1);
    }

    showFinishedButton = () => {
        const activeIndex = this._getActiveTabIndex();
        const lengthOfTabs = this.props.tabs.length;
        return activeIndex === (lengthOfTabs - 1)
    }

    render() {
        return (
            <div className="tabs_container">
                <Card>
                    <CardHeader
                        title={this.props.title}
                        subheader={this.props.subHeader}
                    />
                    <CardContent>
                        <div className="tabs-block">
                            <div className="active-block" style={this.getActiveSliderStyle()}></div>
                            <ul>
                                {
                                    this.renderTabs()
                                }
                            </ul>
                        </div>
                        <div className="tab-body">
                            <Row>
                                {
                                    this._getActiveTabComponent()
                                }
                            </Row>
                        </div>
                        <div className="tab-footer">
                            {
                                this.showPrevButton() ?
                                    <Button
                                        className="primary"
                                        onClick={this.props.onPrev}
                                    >
                                        Prev
                                        </Button> : ''
                            }
                            {
                                this.showNextButton() && !this.props.hideNextButton ?
                                    <Button
                                        className="primary"
                                        disabled={this.props.disabledNextButton}
                                        onClick={this.props.onNext}
                                    >
                                        Next
                            </Button> : ''
                            }
                            {
                                this.showFinishedButton() ?
                                    <Button
                                        className="primary"
                                        disabled={this.props.disabledNextButton}
                                        onClick={this.props.onFinish}
                                    >
                                        {this.props.finishText || 'Finish'}
                            </Button> : ''
                            }


                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    _getActiveTabIndex = () => {
        return this.props.tabs.findIndex(tab => tab.isActive === true);
    }

    _getActiveTabComponent = () => {
        const tabs = [...this.props.tabs];
        const activeIndex = this._getActiveTabIndex();
        return tabs[activeIndex] ? tabs[activeIndex].component : '';
    }
}

export default Tabs;