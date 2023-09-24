// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from 'firebase/database';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD49I60_bEvpt1p4INCnu1GNujdS4ytMxY",
  authDomain: "eco-saathi.firebaseapp.com",
  projectId: "eco-saathi",
  storageBucket: "eco-saathi.appspot.com",
  messagingSenderId: "660356380091",
  appId: "1:660356380091:web:ec15b3be49c33e91b1809e"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);