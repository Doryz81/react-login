// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChuvVT60qnGHSFy59pZOivslbEcAEU8jI",
  authDomain: "react-login-64789.firebaseapp.com",
  projectId: "react-login-64789",
  storageBucket: "react-login-64789.appspot.com",
  messagingSenderId: "556448587801",
  appId: "1:556448587801:web:d64e650171faf9df698a88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = new getFirestore(app);


export { app, auth, googleProvider, db };