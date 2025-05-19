import React from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Authprovider = ({ children }) => {



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    
    const userInfo = {
       createUser
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