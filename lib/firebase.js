// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // لازم نضيف دي عشان تسجيل الدخول
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwUF0flzbYn278BCy8fNQQiEDUwXDChWg",
  authDomain: "dr-ahmed-tammam.firebaseapp.com",
  projectId: "dr-ahmed-tammam",
  storageBucket: "dr-ahmed-tammam.firebasestorage.app",
  messagingSenderId: "275006885172",
  appId: "1:275006885172:web:57ae16894e746c0701a961",
  measurementId: "G-NEPNH8KSLV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // دي اللي هنستخدمها في الـ Context
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
