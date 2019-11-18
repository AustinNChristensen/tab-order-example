import React, { useState } from 'react';
import { isValidEmail, isValidString } from './validationUtils';
import { AlertWindow } from './AlertWindow';

export const InaccessibleForm = () => {
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [invalidString, setInvalidString] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (invalidString || invalidEmail) {
            setAlertOpen(true);
            setAlertText('Cannot submit, due to invalid inputs!');
        } else {
            e.target.parentNode.reset();
        };
    }

    const validateString = (e) => {
        const isValid = e.target && isValidString(e.target.value);
        if (isValid) {
            setAlertOpen(false);
            setInvalidString(false);
        } else {
            setAlertOpen(true);
            setAlertText('please enter a valid string!');
            setInvalidString(true);
        }
    }
    
    const validateEmail = (e) => {
        const isValid = e.target && isValidEmail(e.target.value);
        if (isValid) {
            setAlertOpen(false);
            setInvalidEmail(false);
        } else {
            setAlertOpen(true);
            setAlertText('please enter a valid email!');
            setInvalidEmail(true);
        }
    }

    const alert = alertOpen ? <AlertWindow message={alertText} accessible={false} /> : null;

    return (
        <>
            {alert}
            <form onSubmit={handleSubmit} className='form'>
                <div className='row'>
                    <div className='input'>
                        <label htmlFor='firstNameInput'>
                            First Name
                    </label>
                        <input id='firstNameInput' type='text' required onBlur={validateString} tabIndex={6} />
                    </div>
                    <div className='input'>
                        <label htmlFor='lastNameInput'>
                            Last Name
                    </label>
                        <input id='lastNameInput' type='text' required onBlur={validateString} tabIndex={4} />
                    </div>
                </div>
                <div className='row'>
                    <div className='input'>
                        <label htmlFor='emailInput'>
                            Email Address
                    </label>
                        <input id='emailInput' type='email' required onBlur={validateEmail} tabIndex={-1} />
                    </div>
                </div>
                <div className='row'>
                    <div className='input'>
                        <label htmlFor='birthdayInput'>
                            Birthday
                    </label>
                        <input id='birthdayInput' type='date' required tabIndex={3} />
                    </div>
                    <div className='input'>
                        <label htmlFor='continentInput'>
                            Continent
                    </label>
                        <select id='continentInput' required tabIndex={2}>
                            <option value='Africa'>Africa</option>
                            <option value='Antarctica'>Antarctica</option>
                            <option value='Asia'>Asia</option>
                            <option value='Australia'>Australia</option>
                            <option value='Europe'>Europe</option>
                            <option value='North America'>North America</option>
                            <option value='South America'>South America</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='input'>
                        <label>
                            Would you like to sign up for emails?
                        <input type='checkbox' tabIndex={5} />
                        </label>
                    </div>
                    <p style={{ display: 'none' }} id='genderLabel'>
                        Gender
                </p>
                    <div className='genderRow'>
                        <div className='input'>
                            <label aria-describedby='genderLabel'>
                                Male
                            <input id='maleInput' type='radio' name='gender' required />
                            </label>
                        </div>
                        <div className='input'>
                            <label aria-describedby='genderLabel'>
                                Female
                            <input id='femaleInput' type='radio' name='gender' required />
                            </label>
                        </div>
                    </div>
                </div>
                <input type='submit' onClick={handleSubmit} className='submitButton' tabIndex={1} />
            </form>
        </>
    );
}



