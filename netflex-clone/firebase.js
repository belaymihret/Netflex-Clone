// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW7ti2Cx2mUXrRcDTbjHnPdaL3LLhn4Zo",
  authDomain: "netflix-clone-c7a9b.firebaseapp.com",
  projectId: "netflix-clone-c7a9b",
  storageBucket: "netflix-clone-c7a9b.appspot.com",
  messagingSenderId: "960018094989",
  appId: "1:960018094989:web:fdc26ed6e0d7484ecbbbc4",
  measurementId: "G-V9GD1R1WEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
