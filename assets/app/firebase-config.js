// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, where } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlKhp5gKE6l5BFBOBcLv6JZB3xIOnwqDo",
    authDomain: "shop-732bb.firebaseapp.com",
    databaseURL: "https://shop-732bb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shop-732bb",
    storageBucket: "shop-732bb.firebasestorage.app",
    messagingSenderId: "650792166626",
    appId: "1:650792166626:web:4ae7de7821542520096abb",
    measurementId: "G-S6TSEZ4FVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy, where, auth, signOut };