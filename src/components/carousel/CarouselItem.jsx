import React, { useState } from 'react';


const CarouselItem = (props) => {
    const obj = props.obj
    const activeIndicator = props.activeIndicator
    console.log(obj)
    return (
        <>
            <div className={`carousel-item ${activeIndicator}`}>
                <img src={obj.imgSrc} className="d-block w-100" alt={obj.altText} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{obj.slideLabel}</h5>
                    <p>{obj.slideContent}</p>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;
