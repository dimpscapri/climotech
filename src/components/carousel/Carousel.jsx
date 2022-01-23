import React, { useState } from 'react';
import one from '../../images/carousel/one.jpg'
import two from '../../images/carousel/two.jpg'
import three from '../../images/carousel/three.jpg'
import './style.css'
import Indicators from './Indicators';
import CarouselItem from './CarouselItem';

const indicatorsData = {
    content: {
        body: [
            {
                id: 0,
                indicatorAreaLabel: "Slide 1"
            },
            {
                id: 1,
                indicatorAreaLabel: "Slide 2"
            },
            {
                id: 2,
                indicatorAreaLabel: "Slide 3"
            }
        ]
    }
};

const imagesData = {
    content: {
        body: [
            {
                id: 0,
                imgSrc: one,
                altText: "First Image",
                slideLabel: "First Slide",
                slideContent: "Lorem ipsum dolor sit amet. Qui perspiciatis expedita voluptatibus esse ea rerum voluptatibus aut accusantium reprehenderit ab sapiente consequatur ut vero consectetur et beatae consequatur."
            },
            {
                id: 1,
                imgSrc: two,
                altText: "Second Image",
                slideLabel: "Second Slide",
                slideContent: "Lorem ipsum dolor sit amet. Qui perspiciatis expedita voluptatibus esse ea rerum voluptatibus aut accusantium reprehenderit ab sapiente consequatur ut vero consectetur et beatae consequatur."
            },
            {
                id: 2,
                imgSrc: three,
                altText: "Third Image",
                slideLabel: "Third Slide",
                slideContent: "Lorem ipsum dolor sit amet. Qui perspiciatis expedita voluptatibus esse ea rerum voluptatibus aut accusantium reprehenderit ab sapiente consequatur ut vero consectetur et beatae consequatur."
            }
        ]
    }
};

const Carousel = (props) => {

    return (
        <>
            <div id="carouselCaptions" class="carousel  slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        indicatorsData.content.body.map(
                            (obj) => {
                                const activeIndicator = obj.id === 0 ? 'true' : "false"
                                return <Indicators activeIndicator={activeIndicator} obj={obj} key={obj.id}></Indicators>
                            }
                        )
                    }
                </div>

                <div className="carousel-inner">
                    {
                        imagesData.content.body.map(
                            (obj) => {
                                const activeIndicator = obj.id === 0 ? 'active' : ""
                                return <CarouselItem activeIndicator={activeIndicator} obj={obj} key={obj.id}></CarouselItem>
                            }
                        )
                    }
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
};

export default Carousel;
