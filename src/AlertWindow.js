import React from 'react';

export const AlertWindow = ({ message, accessible = true }) => {
    let role;
    if (accessible) {
        role = 'alert';
    }
    return (
        <div role={role} className='alertWindow'>
            <p>{message}</p>
        </div> 
    );
}