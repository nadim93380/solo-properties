/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";


export const AuthContext = createContext(null)

const AuthProvidor = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    // Creat user with email pass
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User With email pass
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User state check 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        });
        return () => {
            unsubscribe()
        }
        
    }, [])
    
    // user Logout
    const logout = () => {
        return signOut(auth)
    }
    // Update user 
    const updateUserData = (name = false, photo = false)=>{
        if (name) {
            return updateProfile(user, {
                displayName: name
            })
        }
        if (photo) {
            return updateProfile(user, {
                photoURL: photo
            })
        }
    }

    const authSharing = {
        creatUser,
        loginUser,
        user,
        setUser,
        logout,
        loading,
        setLoading,
        updateUserData
    }
    return (
        <AuthContext.Provider value={authSharing}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvidor;