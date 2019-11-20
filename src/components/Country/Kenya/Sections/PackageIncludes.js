import React from 'react';
import { Col, Row } from 'reactstrap';
import { InfoCard } from '../../../../common/components';
import Package_Includes_1 from '../../../../assets/images/kenya-landing/Package_Includes_1.jpg';
import Package_Includes_2 from '../../../../assets/images/kenya-landing/Package_Includes_2.jpg';
import Package_Includes_3 from '../../../../assets/images/kenya-landing/Package_Includes_3.jpg';
import Package_Includes_4 from '../../../../assets/images/kenya-landing/Package_Includes_4.jpg';
import Package_Includes_5 from '../../../../assets/images/kenya-landing/Package_Includes_5.jpg';
import Package_Includes_6 from '../../../../assets/images/kenya-landing/Package_Includes_6.jpg';

const WhyThePackage = () => {
    const details = [{
        thumbnailImageSrc: Package_Includes_1,
        title: "All-Inclusive Safaris",
        description: " All our Packages starts and ends at the NBO airport, We take care of all your requirements like - Accommodation, Meals, Vehicle, Guide, Park fees, Activites, etc."
    },{
        thumbnailImageSrc: Package_Includes_2,
        title: "Stay on River Bank",
        description: "There are two kinds of accommodations in Masai Mara - Inside and Outside the park. All our packages provide stay inside the park and on banks of the river - Mara or Talek."
    },{
        thumbnailImageSrc: Package_Includes_3,
        title: "Masai Village Tour",
        description: "It may be the safari that draws most of the travelers to Kenya but it is the Masai tribe who adds distinctive cultural flavor. You could sing, dance and mingle with the Masai's on a Village Tour."
    },{
        thumbnailImageSrc: Package_Includes_4 ,
        title: "Bush Dinner",
        description: "For those who have dreamt of dining in the wilds of the Masai Mara, our bush dining experiences by the hippo pool are incomparable."
    },{
        thumbnailImageSrc: Package_Includes_5,
        title: "Three Types of Safaris",
        description: "The most popular mode of safari in Kenya is Jeep but there are other experiences like Boat and Walking Safaris in Cresent Island of Lake Naivasha. Our Packages include them all."
    },{
        thumbnailImageSrc: Package_Includes_6,
        title: "Top Class Guides",
        description: "We strongly believe it is the guide who makes or breaks your safari experience hence we are very choosy about them. Each one on the team is handpicked and has a minimum of 7 years experience."
    }];

    const renderInfoCard = () => {
        return details.map((data, i) => {
            return (
                <Col sm="4" key={i}>
                    <InfoCard
                        src={data.thumbnailImageSrc}
                        title={data.title}
                        description={data.description}
                    />
                </Col>
            )
        });
    }
    return (
        <div className="why-us_container">
            <div className="wrapper">
                <h2>What Our Package Includes</h2>
                <div className="work-flow_blocks">
                    <Row>
                        {
                            renderInfoCard()
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default WhyThePackage;