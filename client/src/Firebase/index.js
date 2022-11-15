// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQMQkxiOU8Fk50aNofaHNBFdJZobvl0RU",
  authDomain: "quicksend-1333c.firebaseapp.com",
  projectId: "quicksend-1333c",
  storageBucket: "quicksend-1333c.appspot.com",
  messagingSenderId: "820861069429",
  appId: "1:820861069429:web:a8a120da3c814c8fe7303c",
  measurementId: "G-Q6DWJQXK5G"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(firebaseApp);
export { storage, db };