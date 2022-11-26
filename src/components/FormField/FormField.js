import React from 'react';
import './FormField.css';

const FormField = ({type, id, name, text, value, changeHandler, min, max}) => {
    return (
        <div
            className={'field-container'}
        >
            <label
                htmlFor={{id}}
            >
                {text}
            </label>

            <input
                className={'text-field-input'}
                type={type}
                id={id}
                name={name}
                placeholder={text}
                value={value}
                onChange={changeHandler}
                min={min}
                max={max}
            />
        </div>
    );
};

export default FormField;