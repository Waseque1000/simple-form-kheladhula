// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOguPW8e0WqWNqRjW3CGjQw_RUoUXFKf4",
  authDomain: "fir-00003.firebaseapp.com",
  projectId: "fir-00003",
  storageBucket: "fir-00003.firebasestorage.app",
  messagingSenderId: "223900211965",
  appId: "1:223900211965:web:7d0c565be0334236773c94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
