// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaIxpWUQ-nObKvHbX3rkJv4h6xwRPZeCs",
  authDomain: "juanes-app42.firebaseapp.com",
  projectId: "juanes-app42",
  storageBucket: "juanes-app42.appspot.com",
  messagingSenderId: "620714429299",
  appId: "1:620714429299:web:5d3c3b2f4a22800c701306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)