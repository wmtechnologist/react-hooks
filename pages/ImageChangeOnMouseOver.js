import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver
                primaryImg="./static/img/color.png" 
                secondaryImg="./static/img/noir.png"
                alt="Olivia"/>
        </div>
    );
};

export default ImageChangeOnMouseOver;