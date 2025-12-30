import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBabqAzNXpOxv5h8LCh0E2E6lQv7jUpVW8",
  authDomain: "tomokkorea-live.firebaseapp.com",
  projectId: "tomokkorea-live",
  storageBucket: "tomokkorea-live.firebasestorage.app",
  messagingSenderId: "833924019865",
  appId: "1:833924019865:web:afc80c4de81ccbfb5a6a08",
  measurementId: "G-SZZKSLJS18"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
