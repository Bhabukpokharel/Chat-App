// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqCKPa44H_Mwb6uk0F56tSx32hbLBZRpo",
  authDomain: "chat-app-9cbc2.firebaseapp.com",
  projectId: "chat-app-9cbc2",
  storageBucket: "chat-app-9cbc2.appspot.com",
  messagingSenderId: "843384833722",
  appId: "1:843384833722:web:7ffcb67b15596314c32483",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
