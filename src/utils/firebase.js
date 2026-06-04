// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0Nno24xxTOZJuJZpsZl-bag-0WL7ckz4",
  authDomain: "netflixgpt-a8b33.firebaseapp.com",
  projectId: "netflixgpt-a8b33",
  storageBucket: "netflixgpt-a8b33.firebasestorage.app",
  messagingSenderId: "98068717439",
  appId: "1:98068717439:web:8a77b7ab0daa8e518dc44a",
  measurementId: "G-HENH2YE8DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();