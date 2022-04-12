// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6bkZWKxl9zMtazcx9Iqekz6xlwZzRqQA",
  authDomain: "genius-car-services-a2dab.firebaseapp.com",
  projectId: "genius-car-services-a2dab",
  storageBucket: "genius-car-services-a2dab.appspot.com",
  messagingSenderId: "900089946514",
  appId: "1:900089946514:web:08bac8a898b0aa12a0a14b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;