// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_gJL4fe5L_V4zccFZwODQ1o1O2KAwiXk",
  authDomain: "react-auth-course-dc224.firebaseapp.com",
  projectId: "react-auth-course-dc224",
  storageBucket: "react-auth-course-dc224.appspot.com",
  messagingSenderId: "556731356784",
  appId: "1:556731356784:web:59170f614e1d49f0b186b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const dbData = getFirestore(app);