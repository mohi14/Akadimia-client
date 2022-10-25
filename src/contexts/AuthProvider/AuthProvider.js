import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const emailPasswordSignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()

    const googleSignInUser = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider()

    const githubSignInUser = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        user,
        emailPasswordSignUpUser,
        logInUser,
        googleSignInUser,
        githubSignInUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;