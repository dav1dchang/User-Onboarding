import React, { useState } from 'react';
import '../App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import Schema from '../Schema';
import Users from './Users';


const initialUsers = [];
const initialFormValues = { 
  name: '',
  email: '',
  password: '',
  tos: false,
};
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

function Application() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res.data);
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const inputChange = (name, value) => { 
    yup
      .reach(Schema, name) 
      .validate(value) 
      .then(() => { 
        setFormErrors({ 
          ...formErrors, 
          [name]: '', 
        });
      })
      .catch((err) => { 
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0], 
        })
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    };
    postNewUser(newUser);
  }

  return (
    <div className="App">
      <h1>User Onboarding Application</h1>
      <Form 
        values={formValues}
        errors={formErrors}
        change={inputChange}
        submit={formSubmit}
      />
      <div className="user-wrapper">
        {users.map((user) => {
          return <Users key={user.id} userOBJ={user}/>
          })}
      </div>
    </div>
  );
}

export default Application;