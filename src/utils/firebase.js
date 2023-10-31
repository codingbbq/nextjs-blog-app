// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjsblogapp-codingbbq.firebaseapp.com",
  projectId: "nextjsblogapp-codingbbq",
  storageBucket: "nextjsblogapp-codingbbq.appspot.com",
  messagingSenderId: "1099398667357",
  appId: "1:1099398667357:web:583ed38ddeae3e2e85c1b4"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);