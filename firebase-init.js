// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA66sbVnP3CNVpdTUz13MuLwemiObpR-QM",
  authDomain: "techforge-academy.firebaseapp.com",
  projectId: "techforge-academy",
  storageBucket: "techforge-academy.appspot.com", 
  messagingSenderId: "724281790220",
  appId: "1:724281790220:web:1698209a0840d83e5ac329",
  measurementId: "G-TCQY5VY8M8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
