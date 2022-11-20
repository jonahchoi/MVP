import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword } from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const signup = async (email, pw) => {
    let user = await createUserWithEmailAndPassword(auth, email, pw);
    let currUser = user.user;

    let response = {
      email: currUser.email,
      authId: currUser.uid
    }
    if (currUser) {
      setCurrentUser(response);
      return response;
    }
  };

  const login = async (email, pw) => {
    let user = await signInWithEmailAndPassword(auth, email, pw);
    let currUser = user.user;
    let response = {
      email: currUser.email,
      authId: currUser.uid
    }
    if(currUser) {
      setCurrentUser(response);
      return response;
    }
  };

  const logout = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setIsLoading(false);
    })

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return(
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
};