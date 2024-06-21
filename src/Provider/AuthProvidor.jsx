/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
        
    }, [])
    
    // user Logout
    const logout = () => {
        return signOut(auth)
    }

    const authSharing = {
        creatUser,
        loginUser,
        user,
        logout
    }
    return (
        <AuthContext.Provider value={authSharing}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidor;