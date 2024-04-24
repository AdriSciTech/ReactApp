import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

// Function to create a new user
export const createNewUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Handle new user creation
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Handle error
  }
};

// Function to sign in a user
export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Handle user sign-in
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Handle error
  }
};

// Function to handle auth state changes
export const handleAuthStateChange = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const uid = user.uid;
      // Handle user signed in
    } else {
      // User is signed out
      // Handle user signed out
    }
  }, (error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Handle error
  });
};