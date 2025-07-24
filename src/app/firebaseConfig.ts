import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu57RVwlgM03MH64v77iq8LD_hQ-tEzPE",
  authDomain: "project-5-9e921.firebaseapp.com",
  databaseURL: "https://project-5-9e921-default-rtdb.firebaseio.com",
  projectId: "project-5-9e921",
  storageBucket: "project-5-9e921.firebasestorage.app",
  messagingSenderId: "704893239187",
  appId: "1:704893239187:web:fd7271d272fb370309f266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);