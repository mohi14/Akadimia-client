import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const emailPasswordSignUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()

    const googleSignInUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider()

    const githubSignInUser = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }


    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    })

    const authInfo = {
        user,
        loading,
        setLoading,
        emailPasswordSignUpUser,
        logInUser,
        googleSignInUser,
        githubSignInUser,
        logOutUser,
        updateUserProfile

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;