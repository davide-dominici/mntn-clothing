import { initializeApp } from 'firebase/app';

import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';


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


//Setup google Oauth 
const authProvider = new GoogleAuthProvider();
authProvider.setCustomParameters({
  prompt: 'select_account'
});


export const auth = getAuth();
export const googleSignIn = () => signInWithPopup(auth, authProvider);


//Setup email auth and create user record
export const createEmailAndPasswordAuth = async (email, password) => {

  if(!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

//Sign in user with email and pass
export const signInEmailAndPassAuth = async (email, password) => {
  if(!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
}

//sign out user
export const signOutUser = async () => {await signOut(auth);}

//Firestore database setup
export const database = getFirestore();

//Add new objects to firestore db
export const addCollectionAndDocumentsToDb = async (key, objects) => {
  const collectionReference = collection(database, key);
  const batchData = writeBatch(database);

  //Iterate over each object in batch and create new document reference for each one
  objects.forEach((object) => {
    const documentRef = doc(collectionReference, object.title.toLowerCase())
    batchData.set(documentRef, object);
  });

  await batchData.commit();
}

export const getCategoriesAndDocumentsFromDb = async () => {
  const collectionReference = collection(database, 'categories');
  const collectionQuery = query(collectionReference);

  const querySnapshot = await getDocs(collectionQuery);

  const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});

  return categoryMap;
}

//Generate user document
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {


  const userDocumentRef = doc(database, 'users', userAuth.uid);

  //get user data
  const userSnapshot = await getDoc(userDocumentRef)

  //if user data doesn't exist then create it
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch(error) {
        console.log('User creation failed', error);
    }
  }
}

//Listen for authentication changes
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
}
