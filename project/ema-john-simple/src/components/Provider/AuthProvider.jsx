import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


 export const AuthContext = createContext(null);
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    
   // const user = {email: 'Al khratra'};

   const [user ,setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email , password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth , email, password);
    
   }

   const logOut = () => {
    return signOut(auth);
   }

   //observe user auth state
 useEffect ( () => {
  const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false);
    })
    //stop observing while observing
    return () => {
        return unsubscribe();
    }

   }, [])
    const authInfo ={
        user, createUser , signIn, logOut, loading
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo} >
                {children}


            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;