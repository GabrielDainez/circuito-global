export const environment = {
  production: false
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDQpTT8AbGGzFm79RZkC5OKHG-axOo56-k",
  authDomain: "circuito-global.firebaseapp.com",
  projectId: "circuito-global",
  storageBucket: "circuito-global.appspot.com",
  messagingSenderId: "980783039599",
  appId: "1:980783039599:web:9cbe6445da695d6dfcb99a",
  measurementId: "G-J25V3PDSRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);