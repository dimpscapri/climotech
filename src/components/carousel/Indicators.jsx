import React, { useState } from 'react';

const Indicators = (props) => {
    const obj = props.obj
    const activeIndicator = props.activeIndicator
    if (activeIndicator === 'true') {
        return <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to={obj.id} className="active" aria-current="true" aria-label={obj.indicatorAreaLabel}></button>
    }
    else {
        return <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to={obj.id} aria-label={obj.indicatorAreaLabel}></button>
    }

};

export default Indicators;
