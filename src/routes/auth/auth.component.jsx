import SignUp from '../../components/sign_up/sign_up.component';
import SignIn from '../../components/sign_in/sign_in.component';
import './auth.styles.scss';

const Auth = () => {

  return (
    <div className='auth-container'>
      <SignIn />
      <SignUp />
    </div>
  );

}

export default Auth;