// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWB2gnnsiOlti6ng0W1wLjtuJaSuCZoTI",
  authDomain: "misty-mrittika.firebaseapp.com",
  projectId: "misty-mrittika",
  storageBucket: "misty-mrittika.appspot.com",
  messagingSenderId: "1087055905727",
  appId: "1:1087055905727:web:f9ee86fd272186e929970a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;