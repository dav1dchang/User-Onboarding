import React from 'react';
import '../App.css';

export default function Users(props) {
    return (
        <div className='user'>
            <h4 id='nameTest'>{props.userOBJ.name}</h4>
            <p id='emailTest'>{props.userOBJ.email}</p>
            <p id='passwordTest'>{props.userOBJ.password}</p>
        </div>
    )
}; 