// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxPoyvysdi5ete229waVsQIRGaacV1SsE",
    authDomain: "medium-blogs-learning.firebaseapp.com",
    projectId: "medium-blogs-learning",
    storageBucket: "medium-blogs-learning.appspot.com",
    messagingSenderId: "636875558516",
    appId: "1:636875558516:web:c25a478dfa58a7b685cb21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;