import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SliderBanner.scss';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from 'reactstrap';
// import Button from '../Button/Button';
import './SliderBanner.scss';

class SliderBanner extends Component {
    state = {
        activeIndex: 0,
        animating: false
    }

    onNext = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    onPrev = () => {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex
        });
    }

    goToIndex = (newIndex) => {
        if (this.state.animating) return;
        this.setState({
            activeIndex: newIndex
        });
    }

    onAnimating = (animating) => {
        this.setState({
            animating
        });
    }

    slides = () => {
        return this.props.items.map((item, i) => {
            return (
                    <CarouselItem
                        onExiting={() => this.onAnimating(true)}
                        onExited={() => this.onAnimating(false)}
                        key={i}>
                        <img src={item.src} alt={item.altText || 'banner image'} />
                        <div className="banner-text">
                        <h2 className="slider-banner_container">{item.caption}</h2>
                        {/* <Button className="primary" onClick={() => this.props.history.push({pathname:'/get-quotes', search:`C=${item.path}`})}>Get Quotes</Button> */}
                        </div>
                    </CarouselItem>

            );
        });
    }

    render() {
        return (
            <div className="slider-banner_container">
                <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.onNext}
                    previous={this.onPrev}
                >
                    <CarouselIndicators items={this.props.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                    {this.slides()}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.onPrev} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.onNext} />
                </Carousel>
            </div>
        );
    }
}

export default withRouter(SliderBanner);
