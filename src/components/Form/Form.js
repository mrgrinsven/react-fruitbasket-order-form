import React, {useState} from 'react';
import FormField from '../FormField/FormField';
import './Form.css';
import Button from "../Button/Button";

const Form = () => {
    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age: '',
        postalCode: '',
        frequency: 'weekly',
        period: '',
        message: '',
        conditions: false,
    });

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function submit() {
        console.log(formState)
    }

    return (
        <form onSubmit={submit}>
            <FormField
                type={'text'}
                id={'firstname-field'}
                name={'firstname'}
                text={'voornaam'}
                value={formState.firstname}
                changeHandler={handleChange}
            />
            <FormField
                type={'text'}
                id={'lastname-field'}
                name={'lastname'}
                text={'achternaam'}
                value={formState.lastname}
                changeHandler={handleChange}
            />
            <FormField
                type={'number'}
                id={'age-field'}
                name={'age'}
                text={'leeftijd'}
                value={formState.age}
                changeHandler={handleChange}
                min={'0'}
                max={'150'}
            />
            <FormField
                type={'text'}
                id={'postal-code-field'}
                name={'postalCode'}
                text={'postcode'}
                value={formState.postalCode}
                changeHandler={handleChange}
            />
            <label
                htmlFor={'delivery-frequency-select-box'}
            >
                bezorgfrequentie
            </label>

            <select
                name={'frequency'}
                id={'delivery-frequency-select-box'}
                value={formState.frequency}
                onChange={handleChange}>
                <option value={'weekly'}>iedere week</option>
                <option value={'two weekly'}>om de week</option>
                <option value={'monthly'}>iedere maand</option>
            </select>

            <div className={'period-container'}>
                <div
                    className={'period-radio-buttons'}
                >
                    <label
                        htmlFor="day-radio"
                    >
                        overdag
                    </label>
                    <input
                        type={'radio'}
                        id={'day-radio'}
                        name={'period'}
                        value={'day'}
                        checked={formState.period === 'day'}
                        onChange={handleChange}
                    />
                </div>
                <div
                    className={'period-radio-buttons period-radio-buttons-evening'}
                >

                    <label
                        htmlFor="evening-radio"
                    >
                        's Avonds
                    </label>
                    <input
                        type={'radio'}
                        id={'evening-radio'}
                        name={'period'}
                        value={'evening'}
                        checked={formState.period === 'evening'}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label
                htmlFor={'message-field'}
            >
                opmerking
            </label>
            <textarea
                name={'message'}
                id={'message-field'}
                cols={30}
                rows={10}
                value={formState.message}
                onChange={handleChange}
            >
            </textarea>

            <div
                className={'condition-container'}
            >
                <input
                    id={'condition-checkbox'}
                    type={'checkbox'}
                    name={'conditions'}
                    checked={formState.conditions}
                    onChange={handleChange}
                />
                <label
                    className={'condition-text'}
                    htmlFor={'condition-checkbox'}
                >
                    ik ga akkoord met de voorwaarden
                </label>
            </div>

            <Button
                type={'submit'}
                id={'submit-button'}
            >
                verzend
            </Button>
        </form>
    );
};

export default Form;