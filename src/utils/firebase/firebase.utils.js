import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


//Firebase authentication config
const firebaseConfig = {
  apiKey: "AIzaSyDCS8gDykVTu8NOly8QMB8d5snkMaFgg5M",
  authDomain: "mntn-clothing-db.firebaseapp.com",
  projectId: "mntn-clothing-db",
  storageBucket: "mntn-clothing-db.appspot.com",
  messagingSenderId: "916755667112",
  appId: "1:916755667112:web:7dd254b74e38f0c1894a9d"
};

const firebaseApp = initializeApp(firebaseConfig);
//Init google Oauth 
const authProvider = new GoogleAuthProvider();
authProvider.setCustomParameters({
  prompt: 'select_account'
});


export const auth = getAuth();
export const googleSignIn = () => signInWithPopup(auth, authProvider);

export const database = getFirestore();
const createUserDocumentFromAuth = async (userAuth) => {
  const userDocumentRef = doc(database, 'users', userAuth.uid);
}


