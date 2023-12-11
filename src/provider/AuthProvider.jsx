import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../utilities/firebase/config.firebase";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
    })
    return () => unsubscribe()
  },[])

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleSignIn,
    githubSignIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
