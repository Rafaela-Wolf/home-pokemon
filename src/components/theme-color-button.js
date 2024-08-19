import React from 'react';

const ThemeColorButton = ({ onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>Dark mode</button>
    );
}

export default ThemeColorButton;