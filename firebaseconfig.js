// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.ENV.API_KEY,
  authDomain: process.ENV.AUTH_DOMAIN,
  projectId: process.ENV.PROJECT_ID,
  storageBucket: process.ENV.STORAGE_BUCKET,
  messagingSenderId: process.ENV.MESSAGING_SENDER_ID,
  appId: process.ENV.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(process.ENV.RECAPTCHA),
  isTokenAutoRefreshEnabled: true,
});

export { auth, db };
