// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-32d30.firebaseapp.com",
  projectId: "mern-estate-32d30",
  storageBucket: "mern-estate-32d30.appspot.com",
  messagingSenderId: "1006374380301",
  appId: "1:1006374380301:web:a1017e8592fb64de494644",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
