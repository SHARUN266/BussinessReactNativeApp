// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMXX4k1Pz4cii_K8A6uFln3cLAPNFsVwo",
  authDomain: "masaiprojectgetharvest.firebaseapp.com",
  projectId: "masaiprojectgetharvest",
  storageBucket: "masaiprojectgetharvest.appspot.com",
  messagingSenderId: "605135694103",
  appId: "1:605135694103:web:f8106151405161c2b4ef52",
  measurementId: "G-JVRTN69EX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const storage=getStorage(app)
//const analytics = getAnalytics(app);