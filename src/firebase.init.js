// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAatLaoc-EyFlJKTUqLi5Q-CylHemogK54",
    authDomain: "ema-john-simple-57a99.firebaseapp.com",
    projectId: "ema-john-simple-57a99",
    storageBucket: "ema-john-simple-57a99.appspot.com",
    messagingSenderId: "1033528134161",
    appId: "1:1033528134161:web:8995c2856f7dfbefa6bfb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;