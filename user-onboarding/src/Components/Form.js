import React from 'react';
import '../App.css';

function Form(props) {

    const {values, errors, change, submit} = props;

    const onSubmit = (evt) => {
        evt.preventDefault(); 
        submit(); 
    };

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target; 
        const valueToUse = type === 'checkbox' ? checked : value; 
        change(name, valueToUse); 
    };

    const disabled = () => {
        return !values.name.trim() || !values.email.trim() || !values.password.trim() || !values.tos 
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>       
            <div className='form-group inputs'>
                <label>
                    Name: 
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                        placeholder='John Doe'
                    />
                </label>
                { errors.name.length > 0 && <p className='error'>{errors.name}</p> }
                <label>
                    Email: 
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='email'
                        placeholder='example@123.com'
                    />
                </label>
                { errors.email.length > 0 && <p className='error'>{errors.email}</p> }
                <label>
                    Password: 
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                        placeholder='Password'
                    />
                </label>
                { errors.password.length > 0 && <p className='error'>{errors.password}</p> }
            </div>
            <div className='form-group checkbox'>
                <label> I have read and agree to the Terms of Service
                    <input 
                        type='checkbox'
                        name='tos'
                        checked={values.tos}
                        onChange={onChange}
                    />
                </label>
            </div>
            <button id='submit' disabled={disabled()}>Submit</button>
        </form>
    );
}

export default Form; 