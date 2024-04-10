// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVV02rdXeeEEehLMfSm6oeNmDvIqjECoY",
  authDomain: "furry-tales-35c76.firebaseapp.com",
  projectId: "furry-tales-35c76",
  storageBucket: "furry-tales-35c76.appspot.com",
  messagingSenderId: "817554728288",
  appId: "1:817554728288:web:6cc64e6feac5a5251dea05",
  measurementId: "G-2DSNPK2X5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 