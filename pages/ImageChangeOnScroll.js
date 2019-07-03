import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1, 2, 3, 4].map(id => {
                return (
                    <div key={id}>
                        <ImageToggleOnScroll
                            primaryImg={`../static/img/bw/${id}.jpg`}
                            secondaryImg={`../static/img/${id}.jpg`}
                            alt=""
                        />
                    </div>
                );
            })};
        </div>
    );
};

export default ImageChangeOnScroll;