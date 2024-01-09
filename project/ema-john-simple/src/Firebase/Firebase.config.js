// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIo8siKWcsUNY0ZwUZDmKwKMYsKSP-sOQ",
  authDomain: "ema-john-with-firebase-a-96cd3.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-96cd3",
  storageBucket: "ema-john-with-firebase-a-96cd3.appspot.com",
  messagingSenderId: "852029762821",
  appId: "1:852029762821:web:06c9ecb92053769b331b6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;