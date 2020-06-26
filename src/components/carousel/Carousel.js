import React from 'react';
import './Carousel.css';
import Arrow from '../../assets/icons/arrow.svg';

// Component for left arrow
function LeftArrow(props) {
    return <img src={Arrow} alt="Arrow" className="arrow arrowLeft" onClick={props.onClick}/>
        //     <img src={Arrow} alt="Arrow"/>
        // </div>
}

// Component for right arrow
function RightArrow(props) {
    return <img src={Arrow} alt="Arrow" className="arrow arrowRight" onClick={props.onClick}/>
}

// Component for carousel indicator
function Indicator(props) {
    return( 
        <div 
            className={
                props.index === props.activeIndex
                    ? "indicator indicatorActive"
                    : "indicator"
            } onClick={props.onClick} />
    )
}

// Component for slide
function CarouselSlide(props) {
    return(
        <div 
            className={
                props.index === props.activeIndex
                    ? "carouselSlide carouselSlideActive"
                    : "carouselSlide"
            }>
            {
                props.slide.type === "video" 
                ? <iframe src={props.slide.src} title={props.slide.title}></iframe>
                : <img src={props.slide.src} alt={props.slide.alt}></img>
            }
        </div>
    )
}

// Carousel component
class Carousel extends React.Component {
    constructor(props) {
        super(props);
  
        this.goToSlide = this.goToSlide.bind(this);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);
  
        this.state = {
            activeIndex: 0
        };
    }
  
    goToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }
  
    goToPrevSlide(e) {
        e.preventDefault();
  
        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;
  
        if (index < 1) {
            index = slidesLength;
        }
  
        --index;
  
        this.setState({
            activeIndex: index
        });
    }
  
    goToNextSlide(e) {
        e.preventDefault();
  
        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;
  
        if (index === slidesLength) {
            index = -1;
        }
  
        ++index;
  
        this.setState({
            activeIndex: index
        });
    }
  
    render() {
        return (
            <div className="carouselContainer">
                <LeftArrow onClick={e => this.goToPrevSlide(e)} />
                <RightArrow onClick={e => this.goToNextSlide(e)} />
            
                <div className="carousel">
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}

                    <div className="indicatorContainer">
                        {this.props.slides.map((slide, index) =>
                            <Indicator
                                key={index}
                                index={index}
                                activeIndex={this.state.activeIndex}
                                onClick={e => this.goToSlide(index)}
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
  