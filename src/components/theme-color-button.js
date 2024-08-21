import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeColorButton = ({ onClick, className, isDarkMode }) => {
    return (
        <button onClick={onClick} className={className}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon } />
        </button>
    );
};

export default ThemeColorButton;
