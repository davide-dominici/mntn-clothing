import SignUp from '../../components/sign_up/sign_up.component';
import SignIn from '../../components/sign_in/sign_in.component';
import {
  AuthContainerStyled
} from './auth.styles';

const Auth = () => {

  return (
    <AuthContainerStyled>
      <SignIn />
      <SignUp />
    </AuthContainerStyled>
  );

}

export default Auth;