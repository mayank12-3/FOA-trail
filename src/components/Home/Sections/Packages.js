import React from 'react';
import { Col, Row } from 'reactstrap';
import { InfoCard } from '../../../common/components/';
import Package1 from '../../../assets/images/Package_1.jpg';
import Package2 from '../../../assets/images/Package_2.jpg';
import Package3 from '../../../assets/images/Package_3.jpg';
import Package4 from '../../../assets/images/Package_4.jpg';
import Package5 from '../../../assets/images/Package_5.jpg';
import Package6 from '../../../assets/images/Package_6.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Packages = () => {
    const details = [{
        src: Package1,
        duration: "7 days",
        startingFromPrice: 1234,
        imageTitle: 'Masai Mara, Amboseli, Nakuru, and Naivasha',
        title: 'Masai Mara, Amboseli, Nakuru, and Naivasha',
        description: "From the golden grasslands of Masai Mara to the tallest peak of Africa, Kilimanjaro this guided private tour will cover them all."
    },{
        src: Package2,
        startingFromPrice: 1234,
        duration: "6 days",
        imageTitle: 'Calving Season Safari',
        title: 'Calving Season Safari',
        description: "Uncover the secret of nature’s miracle and find out how the great wildebeest migration begins."
    },{
        src: Package3,
        startingFromPrice: 1234,
        duration: "4 days",
        imageTitle: 'Bwindi National Park, Lake Bunyonyi, Queen Elizabeth National Park',
        title: 'Bwindi National Park, Lake Bunyonyi, Queen Elizabeth National Park',
        description: "Wander in the misty Bwindi national park for the wildest experience of your life - Gorilla Tracking where you watch the last of these apes play, feed and relax."
    },{
        src: Package4,
        startingFromPrice: 1234,
        duration: "6 days",
        imageTitle: 'Masai Mara, Samburu and Nakuru',
        title: 'Masai Mara, Samburu and Nakuru',
        description: "A classic Kenya package which promises all of the Big 5 including the elusive leopard and rhino."
    },{
        src: Package5,
        startingFromPrice: 1234,
        duration: "5 days",
        imageTitle: "Serengeti, Ngorongoro and Lake Manyara",
        title: "Serengeti, Ngorongoro and Lake Manyara",
        description: "Explore the northern circuit of Tanzania by covering the never-ending savannah plains of Serengeti, a million-year-old crater and the soda lake of rift valley."
    },{
        src: Package6,
        startingFromPrice: 1234,
        duration: "6 days",
        imageTitle: 'Kibale NP, Queen Elizabeth NP, Bwindi NP, and Lake Bunyonyi',
        title: 'Kibale NP, Queen Elizabeth NP, Bwindi NP, and Lake Bunyonyi',
        description: "See the best of Uganda on this tailor-made package along with both Chimpanzee and gorilla tracking"
    }];
    const renderInfoCard = () => {
        return details.map((data, i) => {
            const duration = getDurationComponent(data.duration);
            const tag = getTagComponent(data.startingFromPrice);
            return (
                <Col sm="4" key={i}>
                    <InfoCard
                        footer={duration}
                        tag={tag}
                        path={`/details?C=${data.title}`}
                        src={data.src}
                        imageTitle={data.imageTitle}
                        title={data.title}
                        description={data.description}
                    />
                </Col>
            )
        });
    }

    const getDurationComponent = (duration) => {
        return (
            <div className="duration">
                <FontAwesomeIcon icon={faClock} />
                <span>{duration}</span>
            </div>
        );
    }

    const getTagComponent = (startingFrom = '') => {
        return startingFrom ? <p>Starting From &#8377; {startingFrom}</p> : ''
    }
    return(
        <div className="packages_container">
            <div className="wrapper">
                <h2>Featured Tour Packages</h2>
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

export default Packages;