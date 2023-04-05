import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ALbJW0SW2dhHh7LieulMW6pg9kzvMo4",
  authDomain: "challenge-25b79.firebaseapp.com",
  projectId: "challenge-25b79",
  storageBucket: "challenge-25b79.appspot.com",
  messagingSenderId: "402160502965",
  appId: "1:402160502965:web:a67168e74236fe66bb16fc",
  measurementId: "G-W7F6RCGGM2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};