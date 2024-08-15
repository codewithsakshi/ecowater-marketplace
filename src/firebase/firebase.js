// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYamohCq4Zvpo0DLw6la644RUcwCUTBZE",
  authDomain: "moksh-8e7a6.firebaseapp.com",
  projectId: "moksh-8e7a6",
  storageBucket: "moksh-8e7a6.appspot.com",
  messagingSenderId: "314425425918",
  appId: "1:314425425918:web:3e027d05dff3747b7dcaaf",
  measurementId: "G-K1ZDKG2PNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


