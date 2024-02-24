// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2JjnBTarnHqyRErs-5c4YZGjhUsYHfBQ",
  authDomain: "auth-test-6eca8.firebaseapp.com",
  projectId: "auth-test-6eca8",
  storageBucket: "auth-test-6eca8.appspot.com",
  messagingSenderId: "1008098918500",
  appId: "1:1008098918500:web:21bfa313f533d35448df71",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
