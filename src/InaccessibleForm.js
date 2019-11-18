import React from 'react';

export const InaccessibleForm = () => {
    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        e.target.parentNode.reset();
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='row'>
                <div className='input'>
                    <label htmlFor='firstNameInput'>
                        First Name
                    </label>
                    <input id='firstNameInput' type='text' required />
                </div>
                <div className='input'>
                    <label htmlFor='lastNameInput'>
                        Last Name
                    </label>
                    <input id='lastNameInput' type='text' required />
                </div>
            </div>
            <div className='row'>
                <div className='input'>
                    <label htmlFor='emailInput'>
                        Email Address
                    </label>
                    <input id='emailInput' type='email' required/>
                </div>
            </div>
            <div className='row'>
                <div className='input'>
                    <label htmlFor='birthdayInput'>
                        Birthday
                    </label>
                    <input id='birthdayInput' type='date' required />
                </div>
                <div className='input'>
                    <label htmlFor='continentInput'>
                        Continent
                    </label>
                    <select id='continentInput' required>
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
                <p style={{display: 'none'}} id='genderLabel'>
                    Gender
                </p>
                <div className='genderRow'>
                    <div className='input'>
                        <label aria-describedby='genderLabel'>
                            Male
                            <input id='maleInput' type='radio' name='gender' required/>
                        </label>
                    </div>
                    <div className='input'>
                        <label aria-describedby='genderLabel'>
                            Female
                            <input id='femaleInput' type='radio' name='gender' required />
                        </label>
                    </div>
                </div>
            </div>/>
            <button type='submit' onClick={handleSubmit} className='submitButton'>Submit</button>
        </form>
    );
}



