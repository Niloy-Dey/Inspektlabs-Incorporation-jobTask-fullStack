// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUEV7pSgb34hWF1pWAnSxTofZvVuP3hWM",
  authDomain: "job-task-1-d2aa9.firebaseapp.com",
  projectId: "job-task-1-d2aa9",
  storageBucket: "job-task-1-d2aa9.appspot.com",
  messagingSenderId: "613533972301",
  appId: "1:613533972301:web:abb5bb73c76bce7ff22904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);