import React from 'react';
import Coverflow from 'react-coverflow';
import Button from '../Button/Button';
import { withRouter } from 'react-router-dom';
import Kenya from '../../../assets/images/home/cs_kenya.jpg';
import Uganda from '../../../assets/images/home/cs_uganda.png';
import Tanzania from '../../../assets/images/home/cs_tanzania.jpg';
import './coverSlider.scss';

class CoverSlider extends React.Component {
  redirectTo = (country) => {
    if (this.props.packageOnClick) {
      this.props.packageOnClick()
      return
    }
    this.props.history.push(`/tour?country=${country}`);
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
      title: "kenya"
     },{
      src: Uganda,
      title: "uganda"
     },{
      src: Tanzania,
      title: "tanzania"
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
              <h3>{data.title} Packages</h3>
              <img key={index} style={{ display: "block", width: "100%" }} src={data.src} alt={data.title}/>
              <Button
                onClick={() => this.redirectTo(data.title)}
                className="primary">Get Quote</Button>
            </div>
          ))}
        </Coverflow>
      </div>
    )
  }
}

export default withRouter(CoverSlider);
