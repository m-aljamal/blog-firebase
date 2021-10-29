// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0fDJergxMTgy9HDGIA38PpnbDkpEOLuc",
  authDomain: "instgram-79e5f.firebaseapp.com",
  projectId: "instgram-79e5f",
  storageBucket: "instgram-79e5f.appspot.com",
  messagingSenderId: "463322105114",
  appId: "1:463322105114:web:19008d068556c6a51898a3",
  measurementId: "G-WNJQSXKKVX",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, storage, analytics, auth };
