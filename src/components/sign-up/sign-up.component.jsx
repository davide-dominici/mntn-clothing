import { useState } from 'react';
import { createEmailAndPasswordAuth, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up.styles.scss';


const defaultSignUpFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {

  const [ formFields, setFormFields ] = useState(defaultSignUpFields);
  const { displayName, email, password, confirmPassword } = formFields;

  
  const resetFields = () => {
    setFormFields(defaultSignUpFields);
  }

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value});
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert('Passwords do not match');
    }

    try {
      const { user } = await createEmailAndPasswordAuth(email, password);
      
      await createUserDocumentFromAuth(user, { displayName });

      resetFields();

    } catch(err) {

      if(err.code == 'auth/email-already-in-use') {
        alert('Email already in use');
      } else if (err.code == 'auth/weak-password') {
        alert('Password must be at least 6 characters long');
      } else {
        console.log('User creation failed', err);
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account yet?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler} >
        <FormInput label='Display Name' inputProps={{
          type: 'text',
          name: 'displayName',
          value: displayName,
          onChange: changeHandler,
          required: true
        }} />
        <FormInput label='Email' inputProps={{
          type: 'email',
          name: 'email',
          value: email,
          onChange: changeHandler,
          required: true
        }} />
        <FormInput label='Password' inputProps={{
          type: 'password',
          name: 'password',
          value: password,
          onChange: changeHandler,
          required: true
        }} />
        <FormInput label='Confirm Password' inputProps={{
          type: 'password',
          name: 'confirmPassword',
          value: confirmPassword,
          onChange: changeHandler,
          required: true
        }} />
        <Button btnText='Sign Up' btnProps={{type: 'submit'}}></Button>
      </form>
    </div>
  )
}

export default SignUp;