import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
    GoogleAuthProvider, createUserWithEmailAndPassword,
    onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup, signOut,
    updateProfile, GithubAuthProvider
} from "firebase/auth";
export const AuthContext = createContext()



const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // login google 
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }
    const gitHubProvider = new GithubAuthProvider();
    // login gitHub 
    const gitHubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }




    const authInfo = {
        user,
        loading,
        createUser,
        handleProfile,
        logIn,
        logOut,
        googleLogin,
        gitHubLogin

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;