import { getDatabase } from 'firebase/database';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBuixeK0GVjnFLNEsk3PJI_lzdMy-UEtVU",
  authDomain: "map-maker-11cf2.firebaseapp.com",
  databaseURL: "https://map-maker-11cf2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "map-maker-11cf2",
  storageBucket: "map-maker-11cf2.appspot.com",
  messagingSenderId: "345686126216",
  appId: "1:345686126216:web:5c12942c7b4c8931d5793d",
  measurementId: "G-N5EWBDHWCY"
};

const app = initializeApp(firebaseConfig);
export const db =  getDatabase(app);

