import { googleSignIn } from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await googleSignIn();
    console.log(response);
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser} >Sign in with Google</button>
    </div>
  );
}

export default SignIn;