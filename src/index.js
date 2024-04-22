import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; //








// Create a reference to the file we want to download
const storage = getStorage();
const starsRef = ref(storage, 'images/stars.jpg');

// Get the download URL
getDownloadURL(starsRef)
  .then((url) => {
    // Insert url into an <img> tag to "download"
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });