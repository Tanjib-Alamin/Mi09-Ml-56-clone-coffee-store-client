import React from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Authprovider = ({ children }) => {



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    const userInfo = {
        createUser,
        signInUser
    }
    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
           </AuthContext>
        </div>
    );
};

export default Authprovider;