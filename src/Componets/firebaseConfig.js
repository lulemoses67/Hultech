import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// These values are found in your Firebase Project Settings
const firebaseConfig = {
  apiKey: "AIzaSyDrpiNkGI2rqdTPX-JbuV5gmBjwkZHT8ts",
  authDomain: "hultech-8d7b5.firebaseapp.com",
  databaseURL: "https://hultech-8d7b5-default-rtdb.firebaseio.com",
  projectId: "hultech-8d7b5",
  storageBucket: "hultech-8d7b5.firebasestorage.app",
  messagingSenderId: "833918736754",
  appId: "1:833918736754:web:ff7cafd813c1446ed165eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Export the db for use in your hooks and components
export { db };
