// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuVy31KBc4ky0S7ez5ycbzJxVQSLqULm4",
  authDomain: "pf-react-coderhouse-a07ce.firebaseapp.com",
  projectId: "pf-react-coderhouse-a07ce",
  storageBucket: "pf-react-coderhouse-a07ce.firebasestorage.app",
  messagingSenderId: "915251835691",
  appId: "1:915251835691:web:4d928c1bb4c06f11014b6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
