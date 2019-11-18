import React from 'react';

export const AlertWindow = ({ message }) => {
    return (
        <div role='alert' className='alertWindow'>
            <p>{message}</p>
        </div> 
    );
}