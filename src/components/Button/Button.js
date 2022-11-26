import React from 'react';
import './Button.css';

const Button = ({id, type, className, clickHandler, isDisabled, children}) => {
    return (
        <button
            id={id}
            type={type}
            className={className}
            onClick={clickHandler}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};

export default Button;