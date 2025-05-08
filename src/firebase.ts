// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn3vvN5meyjZGPReCMz5FrtOSsiGdUDJs",
    authDomain: "in-life-employee-finder.firebaseapp.com",
    projectId: "in-life-employee-finder",
    storageBucket: "in-life-employee-finder.firebasestorage.app",
    messagingSenderId: "303802582165",
    appId: "1:303802582165:web:4f04b071be190c41e3879c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);