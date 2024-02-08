// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBnqfoTra5JpaPZKPGjwR-bpbB6N7n0fh4",
  authDomain: "sign-up-5a648.firebaseapp.com",
  projectId: "sign-up-5a648",
  storageBucket: "sign-up-5a648.appspot.com",
  messagingSenderId: "434415644261",
  appId: "1:434415644261:web:1f78cfb2eb1c27f8d5a08c",
  measurementId: "G-B30YMKPWLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
