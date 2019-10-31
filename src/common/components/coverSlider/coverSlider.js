import React from 'react';
import Coverflow from 'react-coverflow';
import Button from '../Button/Button';
import { withRouter } from 'react-router-dom';
import Kenya from '../../../assets/images/CS_Kenya.jpg';
import Uganda from '../../../assets/images/CS_Uganda.png';
import Tanzania from '../../../assets/images/CS_Tanzania.jpg';
import './coverSlider.scss';

class CoverSlider extends React.Component {
  redirectTo = (country) => {
    this.props.history.push(`/packages/${country}`);
  }

  render () {
    let styles = {
      width: "660",
      height: "800",
      displayQuantityOfSide: 2,
      currentFigureScale: 1.4,
      otherFigureScale: 0.6,
      navigation: false,
      enableScroll: true,
      clickable: true,
      active: 0,
      ...this.props.styles
    }
    let imgList = [{
      src: Kenya,
      title: "Kenya"
     },{
      src: Uganda,
      title: "Uganda"
     },{
      src: Tanzania,
      title: "Tanzania"
     }]

    return (
      <div className="cover-slider_container">
        <Coverflow {...styles}>
          {imgList.map((data, index) => (
            <div
              key={index}
              role="menuitem"
              tabIndex="0"
              className="cover-slider_img">
              <img key={index} style={{ display: "block", width: "100%" }} src={data.src} alt={data.title}/>
              <Button
                onClick={() => this.redirectTo(data.title)}
                className="primary"
              >{`${data.title} Packages`}</Button>
            </div>
          ))}
        </Coverflow>
      </div>
    )
  }
}

export default withRouter(CoverSlider);