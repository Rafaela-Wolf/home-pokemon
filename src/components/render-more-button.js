import React from 'react';

const RenderMoreButton = ({ onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>Render more</button>
    );
}

export default RenderMoreButton;