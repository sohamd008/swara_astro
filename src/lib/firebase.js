import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVkYwIg3NdupN_BUNBhNItU2us-0t2SzU",
    authDomain: "swaramanjusha-login.firebaseapp.com",
    projectId: "swaramanjusha-login",
    storageBucket: "swaramanjusha-login.firebasestorage.app",
    messagingSenderId: "134597685600",
    appId: "1:134597685600:web:9e2410aadf376082d2ae05",
    measurementId: "G-ZBBD3YZMS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
