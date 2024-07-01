// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL2MYZl-9ZN8Iuo-DycWXHUxoJ2nN7D_w",
  authDomain: "saurabh-4ac4d.firebaseapp.com",
  projectId: "saurabh-4ac4d",
  storageBucket: "saurabh-4ac4d.appspot.com",
  messagingSenderId: "339285659642",
  appId: "1:339285659642:web:9db549abb5d29d96afde43",
  measurementId: "G-M9MZJLCPVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth();