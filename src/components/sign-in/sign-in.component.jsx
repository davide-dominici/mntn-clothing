import { useState } from 'react';
import { signInEmailAndPassAuth, googleSignIn, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in.styles.scss';


const defaultFields = {

  email: '',
  password: ''

}

const SignIn = () => {

  const [ formFields, setFormFields ] = useState(defaultFields);
  const { email, password } = formFields;

  
  const googleUserSignIn = async () => {
    const { user } = await googleSignIn();
    await createUserDocumentFromAuth(user);
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

      const response = await signInEmailAndPassAuth(email, password);

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
    <div className='sign-up-container'>
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
        <div className='btns-container'>
          <Button btnText='Sign In' btnProps={{type: 'submit'}}></Button>
          <Button btnText='Sign In With Google' btnClass='google' btnProps={{type:'button', onClick: googleUserSignIn}}></Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn;