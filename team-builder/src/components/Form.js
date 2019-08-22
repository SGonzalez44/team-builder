import React, { useState } from 'react';

const Form = (props) => {
const { submitPerson, initialPerson } = props;
const [person, setPerson] = useState(initialPerson || { name:'', email:'', role:''});
const handleChange = event => {
    setPerson({...person, [event.target.name]: event.target.value});
};
const handleSubmit = event => {
    event.preventDefault();
    submitPerson(person);
    setPerson({ name:'', email:'', role:''});
};
return (
    <form onSubmit={handleSubmit}>
        <input placeholder='name'
               value={personalbar.name}
               name='name'
               onChange={handleChange}
               />
          <input placeholder='email'
               value={personalbar.name}
               type='email'
               name='email'
               onChange={handleChange}
               />
            <input placeholder='role'
               value={personalbar.name}
               name='role'
               onChange={handleChange}
               />
            <button type='submit'>Submit</button> 
               
    </form>
)};

export default Form;