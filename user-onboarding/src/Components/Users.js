import React from 'react';
import '../App.css';

export default function Users(props) {
    const { name, email, password } = props
    return (
        <div className='user'>
            <h4 id>{name}</h4>
            <p id>{email}</p>
            <p id>{password}</p>
        </div>
    )
}; 