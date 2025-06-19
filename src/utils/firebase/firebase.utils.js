import { initializeApp } from 'firebase/app';
import { 
  getAuth ,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider, 
  createUserWithEmailAndPassword
} from 'firebase/auth';
import{
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOchfmEYSq7t_0pLl_fL3tqvO-KIrLuRI",
  authDomain: "crown-db-caf95.firebaseapp.com",
  projectId: "crown-db-caf95",
  storageBucket: "crown-db-caf95.firebasestorage.app",
  messagingSenderId: "743776636727",
  appId: "1:743776636727:web:be0ddbd02d16e9bcb814b2",
  measurementId: "G-19VPH5LHJ8"
};

const firebaseApp = initializeApp(firebaseConfig); 

const googleProvider = new GoogleAuthProvider(); //class from firebase authenthication

//force customer to select account when interact with provider
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => 
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth, 
  additionalInformation = {}
) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());
  
  //check if the snapshot user doesn't exits
  if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation
      })
    }
    catch(error){
      console.log('Error creating the user',error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email && !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}