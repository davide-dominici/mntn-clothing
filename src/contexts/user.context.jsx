import { createContext, useState, useEffect } from 'react';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils';

//Contains values used in context
export const UserContext = createContext({

  currentUser: null,
  setCurrentUser: () => null
  
});

//Allows child components to access values of useState via context
export const UserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const stopListening = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    return stopListening;
  }, []);

  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}

