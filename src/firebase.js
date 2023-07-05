// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANYLfOdRkgJH3Qhlo0cu_NEGYpOHshZXc",
  authDomain: "chat-ac09f.firebaseapp.com",
  projectId: "chat-ac09f",
  storageBucket: "chat-ac09f.appspot.com",
  messagingSenderId: "914228309871",
  appId: "1:914228309871:web:50b6ff838b48211592029a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();