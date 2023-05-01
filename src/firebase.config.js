// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr-1z9P3REQ5jlnpwl9tmK_9CNDJdLCgQ",
  authDomain: "travel-guru-353ae.firebaseapp.com",
  projectId: "travel-guru-353ae",
  storageBucket: "travel-guru-353ae.appspot.com",
  messagingSenderId: "417875411952",
  appId: "1:417875411952:web:a1865bf2fe94deda399335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app