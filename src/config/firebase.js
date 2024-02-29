import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_APP_apiKey,
  authDomain: import.meta.env.VITE_FB_APP_authDomain,
  projectId: import.meta.env.VITE_FB_APP_projectId,
  storageBucket: import.meta.env.VITE_FB_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_FB_APP_messagingSenderId,
  appId: import.meta.env.VITE_FB_APP_appId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
