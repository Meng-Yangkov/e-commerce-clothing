import {signInWithGooglePopUp, createUserDcouemntFromAuth} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const loadGooglePopUp = async () => {
    const {user} = await signInWithGooglePopUp();
    const userDocRef = await createUserDcouemntFromAuth(user)
  }

  return(
    <div>
      <h1>SignIn</h1>
      <button onClick={loadGooglePopUp}
      >Sign In with Google</button>
    </div>
  )
}
export default SignIn;