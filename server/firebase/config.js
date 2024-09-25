// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
const {initializeApp} = require('firebase/app');
const { getStorage } = require('firebase/storage');
require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzCGg6GQM-4WSW91I8OGjWZXurI14kp2Y",
  authDomain: "blogproject-c8786.firebaseapp.com",
  projectId: "blogproject-c8786",
  storageBucket: "blogproject-c8786.appspot.com",
  messagingSenderId: "936050274136",
  appId: "1:936050274136:web:f676ec96ea9e487da33f2d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseStorage=getStorage(firebaseApp,'gs://blogproject-c8786.appspot.com');
module.exports={firebaseStorage};
    
