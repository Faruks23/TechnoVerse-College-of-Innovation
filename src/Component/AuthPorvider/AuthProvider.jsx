import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../../firebase.config";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  // create new user with email and password
  const CreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user with  name photoUrl
  const UpdateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  // sign in with google account
  const SignInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // sign in with email address and password

  const SignInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut User
  const LogOutUser = () => {
    return signOut(auth);
  };

  // get logged in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

    });
    return () => {
      unsubscribe();
    };
  }, []);

  // handleDarkTheme
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    const storedMode = JSON.parse(localStorage.getItem("darkMode"));
    if (storedMode !== null) {
      setDarkMode(storedMode);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const getId = (id) => {
   console.log(id);
 }



  const AuthUser = {
    CreateUser,
    loading,
    user,
    UpdateUser,
    LogOutUser,
    SignInWithGoogle,
    SignInWithEmailPassword,
    toggleDarkMode,
    darkMode,
    getId,
  };
  return (
    <>
      <AuthContext.Provider value={AuthUser}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
