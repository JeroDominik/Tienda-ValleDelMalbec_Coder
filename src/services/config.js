import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "valledelmalbec-react.firebaseapp.com",
  projectId: "valledelmalbec-react",
  storageBucket: "valledelmalbec-react.firebasestorage.app",
  messagingSenderId: "1002161727168",
  appId: "1:1002161727168:web:0b6743e8e1099288ff6f25"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)