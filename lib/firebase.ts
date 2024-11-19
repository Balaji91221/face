import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Ensure environment variables are set correctly in .env.local
const firebaseConfig = {
  apiKey: "AIzaSyACj1j8r4oa6mjj4-NohVORfx8rW4krs2g",
  authDomain: "faceai-41dc2.firebaseapp.com",
  projectId: "faceai-41dc2",
  storageBucket: "faceai-41dc2.firebasestorage.app",
  messagingSenderId: "128902304642",
  appId: "1:128902304642:web:3584d9ab261915abd6359b",
  measurementId: "G-MWXP6EHEEF",
};

// Check if any required environment variable is missing
if (
  !firebaseConfig.apiKey ||
  !firebaseConfig.authDomain ||
  !firebaseConfig.projectId ||
  !firebaseConfig.storageBucket ||
  !firebaseConfig.messagingSenderId ||
  !firebaseConfig.appId ||
  !firebaseConfig.measurementId
) {
  console.error("Firebase configuration is missing one or more required values.");
}

// Initialize Firebase only if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase services
export const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
