// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9GMrvvQ3fhqe_YfB-E-i7we7XqxfE5Us",
  authDomain: "clone-coffee-store-ph.firebaseapp.com",
  projectId: "clone-coffee-store-ph",
  storageBucket: "clone-coffee-store-ph.firebasestorage.app",
  messagingSenderId: "540618400834",
  appId: "1:540618400834:web:d626c220793e85dff039db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
