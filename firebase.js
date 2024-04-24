import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAOySHuIoqiF8M0P4ql7ThtNjlqHpC7w0",
  authDomain: "this-is-the-one-1b48b.firebaseapp.com",
  databaseURL: "https://this-is-the-one-1b48b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "this-is-the-one-1b48b",
  storageBucket: "this-is-the-one-1b48b.appspot.com",
  messagingSenderId: "647495363908",
  appId: "1:647495363908:web:746d5cf38d7eb7e9d87b11",
  measurementId: "G-BH6GL5NF04"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

