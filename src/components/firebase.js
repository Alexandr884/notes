import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDFxKz0clC8hlDhNunXtU8CRsXMycmZ03E",
  authDomain: "todo-list-ccaf9.firebaseapp.com",
  databaseURL: "https://todo-list-ccaf9-default-rtdb.firebaseio.com/",
  projectId: "todo-list-ccaf9",
  storageBucket: "todo-list-ccaf9.firebasestorage.app",
  messagingSenderId: "235515258470",
  appId: "1:235515258470:web:dac08c14392ff0ce086fa7",
  measurementId: "G-7GHECMKPHL",
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
