import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import {
  auth,
  signInWithGooglePopUp,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const loadGooglePopUp = async () => {
    try {
      const { user } = await signInWithGooglePopUp();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  }
  return(
    <div>
      <h1>Sign In Page</h1>
      <button onClick={loadGooglePopUp}
      >Sign In with Google Popup</button>
      <SignUpForm/>
    </div>
  )
}
export default SignIn;              