import React from 'react';


const CarouselItem = (props) => {
    const obj = props.obj
    const activeIndicator = props.activeIndicator
    return (
        <>
            <div className={`carousel-item ${activeIndicator}`}>
                <img src={obj.imgSrc} className="d-block w-100" alt={obj.altText} />
                <div className="container">
                    <div className="carousel-caption text-start">
                        <h5>{obj.slideLabel}</h5>
                        <p>{obj.slideContent}</p>
                        <p className='slider-btn'>
                            <a className="btn btn-lg btn-1" href='index.jsp'>Our Services</a>
                            <a className="btn btn-lg btn-2" href='index.jsp'>Contact us</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarouselItem;
