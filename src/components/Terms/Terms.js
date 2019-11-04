import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Banner } from '../../common/components';
import { Row, Col } from 'reactstrap';
import './Terms.scss';

class Terms extends Component {
    
    componentDidMount() {
        this.scrollToTop();
    }

    scrollToTop = () => {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="terms-container">
                <div className="banner_section">
                    <Banner
                        className="about-banner"
                        bannerText='"If there were one more thing I could do, it would be to go on safari once again." - Karen Blixen'
                    />
                </div>
                <Row className="terms-body">
                    <div className="wrapper">
                        <Col className="sm-12">
                            <div className="terms-form">
                                <h2>All bookings made with Full Of Africa are subject to these terms.</h2>
                                <h3>1. Payment, Cancellation and Refund Policy</h3>
                                <p>
                                You will have to pay a deposit of <strong>atleast 40%</strong> of the booking value for the booking to be confirmed. Please note that the deposit amount varies based on the tour type and shall be notified to you before making the booking.
                                </p>
                                <p>Once the booking is accepted by us, we shall send you a booking confirmation email with the voucher, which shall serve as a contract between us from the date we send the confirmation. All details about the balance payment which is due before the departure date will be mentioned in the booking voucher. If this balance is not paid on or before the due date we reserve the right to cancel the booking.</p>
                                <p>The booking is valid only when we would send you a  confirmation voucher and not when you make the advance payment.</p>
                                <p>The services to be provided are those mentioned in your final booking confirmation voucher.</p>
                                <p>In case of cancellations, the following charges will apply on the amount paid</p>
                                <ul>
                                    <li><p>45% if cancelled between 60 and 45 days prior to arrival</p></li>
                                    <li><p>60% if cancelled between 44 and 30 days prior to arrival</p></li>
                                    <li><p>100% if cancelled 30 days and 24 hrs prior to arrival</p></li>
                                </ul>
                                <h3>2. If you Change Your Booking</h3>
                                <p>After your booking has been confirmed, should you wish to make any changes to your itinerary or wish an earlier departure date, we will make every effort to accommodate your requests based on availability. However, there may extra costs involved to accommodate your request. These costs are in addition to the fee quoted to your for your initial safari. Normal cancellation fees apply if you wish to postpone your departure.</p>
                                <h3>3.  Methods of Payment</h3>
                                <p>Payments can be made using any of the following methods:-</p>
                                <ul>
                                    <li><p>By Electronic money transfer (RTGS & NEFT)</p></li>
                                    <li><p>By Net Banking through a list chosen of Banks</p></li>
                                    <li><p>By Online Payment Gateway system through Visa & Master Card</p></li>
                                </ul>
                                <h3>4. Wild Animals</h3>
                                <p>Please be aware that these safaris may take you into close contact with wild animals. Attacks by wild animals are rare, but no safari into the African wilderness can guarantee that this will not occur. Neither Full Of Africa nor their employees can be held responsible for any injury or incident on the safari. Please note that most safari camps in Africa are not fenced.</p>
                                <h3>5. Passport & Visas</h3>
                                <p>The onus is upon the guest to ensure that passports and visas are valid for the countries visited. Full Of Africa and their staff cannot be held liable for any visas, etc. not held by the guests, nor the cost of visas.</p>
                                <h3>6. Health</h3>
                                <p>It is solely your responsibility to obtain proper medical advice and recommendations for the destination you are visiting to ensure that you are in good health for your participation in the trip, If you are either not allowed to enter any country or suffer personal injury as a result, we are not liable.</p>
                                <p>Tropical Disease precautions should be commenced prior to departure. Please consult our doctor for specific advice. If you are a contagious-disease carrier, you must let us know when booking your safari.</p>
                                <h3>7. Insurance</h3>
                                <p>Travel Insurance is highly recommended and should be taken at the time of making the booking. You can ask the safari consultant for recommendations but we will not buy it for you.</p>
                                <h3>8. Responsibility</h3>
                                <p>We shall not be liable for any damage or loss if the failure to carry out the contract is due to political disputes, border closures, refusal of visas, industrial action, climate or other matters of a similar nature, etc.</p>
                                <p>You acknowledge the level of personal risk involved in an activity of this type. It is also your own responsibility to acquaint yourself with all the relevant information needed to travel. You acknowledge that your decision to travel is made in light of consideration of this information.</p>
                                <h3>9. Changes to Schedules</h3>
                                <p>In case of unforeseen circumstances, aspects like route, schedules, itineraries, amenities, and mode of transport etc may be subject to alteration without prior notice.</p>
                                <p>Although every effort is made to adhere to schedules it should be borne in mind that the Company reserves the right and in fact is obliged to occasionally change routes and camps on safaris as dictated by changing conditions. Such conditions may be brought about by seasonal rainfall on bush tracks, airfields and in-game areas, by game migrations from one region to another, or airline or other booking problems, etc.</p>
                                <p>Activities not included in the trip price do not form part of the contract. You accept that any assistance given by your guide or locals in arranging optional activities does not render us liable for them in any way.</p>
                                <h3>10. Refunds</h3>
                                <p>In regard to refund of unused/unutilized services (which are paid for and cancelled in advance), the refund amount would be worked out on the basis of cancellation policy as described above and the money would be accordingly refunded to the person who has made the payment to us. Please note that the refund process may take 4 – 6 weeks due to banking procedures. If the refund is made to the credit card account OR to Bank account, the bank charges would be debited from the refund amount.</p>
                                <h3>11. Flights</h3>
                                <p>The Company can book scheduled airline flights to, from and within Africa via a flight consolidator. However, please note that a service fee will apply. We cannot be held responsible for any schedule changes, flight delay or flight cancellations that occur to your flights and that consequently affect your travel arrangements.</p>
                                <h3>12. Prices</h3>
                                <p>Our prices are based on the prevailing rates negotiated by us with the hotels, vehicle vendors etc. They retain the right to modify the rates, even park fees can be modified by the government authorities without notice. In case of such change – the extra price will have to borne by you.</p>
                                <h3>13. Delays</h3>
                                <p>We cannot be held liable for any delays or additional costs incurred as a result of airlines not running to schedule.</p>
                                <h3>14. T&C Clause</h3>
                                <p>This agreement is made subject to and shall be governed by and construed according to the laws of the country in which the safari takes place. The company only makes your travel arrangements and acts merely as an agent for the operating companies.</p>
                                <p>In the event that any term or condition contained in these Booking Conditions is unenforceable `as being against public policy or for any other reason then such term or condition shall be deemed to be severed from this contract accordingly only to such extent necessary to allow all remaining terms and conditions to survive and continue as binding.</p>
                                <h3>15. Feeback</h3>
                                <p>In case of any feedback/complaints about the trip, please inform your guide at the earliest in order that they can attempt to rectify the matter immediately. If satisfaction is not reached through these means then any further complaint should be put via an email within 30 days of the end of the tour. If the traveler doesn’t submit the complaint within the specified time, it will not be entertained.</p>
                                <h3>16. Marketing</h3>
                                <p>We reserve the right to take photographs during the operation of any safari or part thereof and to use resulting photographs for promotional purposes. By confirming a safari with us, passengers agree to allow their images to be used in such photographs. Passengers who prefer that their images not be used are asked to identify themselves at the beginning of their safari.</p>
                                <h3>17. Privacy Policy</h3>
                                <p>We respect your privacy and hence commit that your personal information will not be shared with any third party except for the people involved in curating your tour.</p>
                                <h2>Website Terms & Conditions</h2>
                                <p>These terms and conditions outline the rules and regulations for the use of Full of Africa’s Website, located at <a href="https://www.fullofafrica.com/">https://www.fullofafrica.com/</a>.</p>
                                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Full of Africa if you do not agree to take all of the terms and conditions stated on this page.</p>
                                <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
                                <h2>License</h2>
                                <p>Unless otherwise stated, Full of Africa and/or its licensors own the intellectual property rights for all material on Full of Africa. All intellectual property rights are reserved. You may access this from Full of Africa for your own personal use subjected to restrictions set in these terms and conditions.</p>
                                <p>You must not:</p>
                                <ul>
                                    <li><p>Republish material from Full of Africa</p></li>
                                    <li><p>Sell, rent or sub-license material from Full of Africa</p></li>
                                    <li><p>Reproduce, duplicate or copy material from Full of Africa</p></li>
                                    <li><p>Redistribute content from Full of Africa</p></li>
                                </ul>
                                <p>This Agreement shall begin on the date hereof.</p>
                                <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Full of Africa does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Full of Africa,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Full of Africa shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                                <p>Full of Africa reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
                                <p>You warrant and represent that:</p>
                                <ul>
                                    <li><p>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</p></li>
                                    <li><p>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</p></li>
                                    <li><p>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy.</p></li>
                                    <li><p>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</p></li>

                                </ul>
                                <p>You hereby grant Full of Africa a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
                                <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>
                                <p>We may consider and approve other link requests from the following types of organizations:</p>
                                <ul>
                                    <li><p>commonly-known consumer and/or business information sources;</p></li>
                                    <li><p>dot.com community sites;</p></li>
                                    <li><p>associations or other groups representing charities;</p></li>
                                    <li><p>online directory distributors;</p></li>
                                    <li><p>internet portals;</p></li>
                                    <li><p>accounting, law and consulting firms; and</p></li>
                                    <li><p>educational institutions and trade associations.</p></li>
                                </ul>
                                <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Full of Africa; and (d) the link is in the context of general resource information.</p>
                                <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>
                                <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to <a href="mailto:travel@fullofafrica.com/">travel@fullofafrica.com</a>. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
                                <p>Approved organizations may hyperlink to our Website as follows:</p>
                                <ul>
                                    <li><p>By use of our corporate name; or</p></li>
                                    <li><p>By use of the uniform resource locator being linked to; or</p></li>
                                    <li><p>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</p></li>
                                </ul>
                                <p>No use of Full of Africa’s logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
                                <h2>Content Liability</h2>
                                <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
                                <h2>Removal of links from our website</h2>
                                <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                                <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
                                <h2>Disclaimer</h2>
                                <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                                <ul>
                                    <li><p>limit or exclude our or your liability for death or personal injury;</p></li>
                                    <li><p>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</p></li>
                                    <li><p>limit any of our or your liabilities in any way that is not permitted under applicable law; or</p></li>
                                    <li><p>exclude any of our or your liabilities that may not be excluded under applicable law.</p></li>
                                </ul>
                                <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                                <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>



                            </div>
                        </Col>
                    </div>
                </Row>
            </div>
        );
    }
}

export default withRouter(Terms);