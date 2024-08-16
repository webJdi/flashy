// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD0mwyxGfwH03pLwj2Noi7azL9rKn4BDM",
  authDomain: "flashy-297d8.firebaseapp.com",
  projectId: "flashy-297d8",
  storageBucket: "flashy-297d8.appspot.com",
  messagingSenderId: "670488724313",
  appId: "1:670488724313:web:6a81cbe37e71ea2d58c248",
  measurementId: "G-NPRZEN0TMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}