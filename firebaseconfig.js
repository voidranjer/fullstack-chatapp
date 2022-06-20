// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "INSERT DETAILS HERE",
  authDomain: "INSERT DETAILS HERE",
  projectId: "INSERT DETAILS HERE",
  storageBucket: "INSERT DETAILS HERE",
  messagingSenderId: "INSERT DETAILS HERE",
  appId: "INSERT DETAILS HERE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(proccess.ENV.RECAPTCHA),
  isTokenAutoRefreshEnabled: true,
});

export { auth, db };
