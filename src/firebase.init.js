// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDV8FuDmaF4id11s7W33riTH3F5n2Bve0",
    authDomain: "unique-auto-parts.firebaseapp.com",
    projectId: "unique-auto-parts",
    storageBucket: "unique-auto-parts.appspot.com",
    messagingSenderId: "588239164534",
    appId: "1:588239164534:web:95e6f445f5a57b10e03b57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;