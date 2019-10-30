import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Banner } from '../../common/components';
import { Row, Col } from 'reactstrap';
import './Privacy.scss';

class Privacy extends Component {
    render() {
        return (
            <div className="privacy-container">
                <div className="banner_section">
                    <Banner
                        className="privacy-banner"
                        bannerText="Privacy Policy"
                    />
                </div>
                <Row className="privacy-body">
                    <div className="wrapper">
                        <Col className="sm-12">
                            <div className="privacy-form">
                                <h2>Privacy Policy</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
    
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
    
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
    
                                    Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only
                                    five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software
                                    like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
        );
    }
}

export default withRouter(Privacy);