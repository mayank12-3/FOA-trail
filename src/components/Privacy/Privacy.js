import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Banner } from '../../common/components';
import { Row, Col } from 'reactstrap';
import './Privacy.scss';

class Privacy extends Component {

    componentDidMount() {
        this.scrollToTop();
    }


    scrollToTop = () => {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="privacy-container">
                <div className="banner_section">
                    <Banner
                        className="privacy-banner"
                        bannerText='"It’s really beautiful. It feels like God visits everywhere else but lives in Africa.” -Will Smith'
                    />
                </div>
                <Row className="privacy-body">
                    <div className="wrapper">
                        <Col className="sm-12">
                            <div className="privacy-form">
                                <h2>Privacy Policy</h2>
                                <p>
                                At Full of Africa, accessible from <a href="https://www.fullofafrica.com">https://www.fullofafrica.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by Full of Africa and how we use it.
                                </p>
                                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at <a href="mailto:travel@fullofafrica.com">travel@fullofafrica.com</a></p>
                                <h2>Log Files</h2>
                                <p>Full of Africa follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services’ analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users’ movement on the website, and gathering demographic information.</p>
                                <h2>Cookies and Web Beacons</h2>
                                <p>Like any other website, Full of Africa uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>
                                <h2>Privacy Policies</h2>
                                <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Full of Africa.</p>
                                <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Full of Africa, which are sent directly to users’ browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
                                <p>Note that Full of Africa has no access to or control over these cookies that are used by third-party advertisers.</p>
                                <h2>Third Party Privacy Policies</h2>
                                <p>Full of Africa’s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
                                <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers’ respective websites. What Are Cookies?</p>
                                <h2>Children’s Information</h2>
                                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
                                <p>Full of Africa does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
                                <h2>Online Privacy Policy Only</h2>
                                <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Full of Africa. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                                <h2>Consent</h2>
                                <p>By using our website, you hereby consent to our Privacy Policy and agree to its <a href="https://www.fullofafrica.com/terms-and-conditions/">Terms and Conditions</a> .</p>


                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
        );
    }
}

export default withRouter(Privacy);