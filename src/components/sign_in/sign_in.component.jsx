import { useState } from 'react';

import { signInEmailAndPassAuth, googleSignIn } from '../../utils/firebase/firebase.utils';

import FormInput from '../form_input/form_input.component';
import Button, { BUTTON_TYPES } from '../button/button.component';

import {
  SignInContainerStyled,
  BtnContainerStyled
} from './sign_in.styles';


const defaultFields = {

  email: '',
  password: ''

}

const SignIn = () => {

  const [ formFields, setFormFields ] = useState(defaultFields);
  const { email, password } = formFields;
  
  const googleUserSignIn = async () => {
    await googleSignIn();
  }

  const resetFields = () => {
    setFormFields(defaultFields);
  }

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value});
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {

      const { user } = await signInEmailAndPassAuth(email, password);

      resetFields();

    } catch(err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert('Wrong email or password');
          break;
        case 'auth/user-not-found':
          alert('Wrong email or password')
          break;
        default:
          break;
      }
    }
  }

  return (
    <SignInContainerStyled>
      <h2>Already registered?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler} >
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
        <BtnContainerStyled>
          <Button btnText='Sign In' btnProps={{type: 'submit'}}></Button>
          <Button btnText='Sign In With Google' btnType={BUTTON_TYPES.google} btnProps={{type:'button', onClick: googleUserSignIn}}></Button>
        </BtnContainerStyled>
      </form>
    </SignInContainerStyled>
  )
}

export default SignIn;