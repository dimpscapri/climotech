import React, { useState } from 'react';


const CarouselItem = (props) => {
    const obj = props.obj
    const activeIndicator = props.activeIndicator
    return (
        <>
            <div className={`carousel-item ${activeIndicator}`}>
                <img src={obj.imgSrc} className="d-block w-100" alt={obj.altText} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{obj.slideLabel}</h5>
                    <p>{obj.slideContent}</p>
                    <div className="slider-btn">
                        <button className="btn btn-1">Our Services</button>
                        <button className="btn btn-2">Get a Quote</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;
