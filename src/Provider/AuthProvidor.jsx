/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";


export const AuthContext = createContext(null)

const AuthProvidor = ({ children }) => {
    const auth = getAuth(app);
    const [user ,setUser]=useState(null)

    // Creat user with email pass
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User With email pass
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User state check 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser(null)
            }
        });
        
    },[])

    const authSharing = {
        creatUser,
        loginUser,
        user
    }
    return (
        <AuthContext.Provider value={authSharing}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidor;