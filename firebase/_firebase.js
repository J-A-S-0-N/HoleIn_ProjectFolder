import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDdF4ldhrnn9kEGe02l5sGPGsZT_b1JTI",
  authDomain: "scorediskconv-dev.firebaseapp.com",
  projectId: "scorediskconv-dev",
  storageBucket: "scorediskconv-dev.firebasestorage.app",
  messagingSenderId: "349231429430",
  appId: "1:349231429430:web:13c72fc607340c0012e597",
  measurementId: "G-7TLGCFEGN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export default db;