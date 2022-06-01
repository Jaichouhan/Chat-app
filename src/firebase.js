// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Bd_CXupIyNKZ9TR-arMSUnwOKrXixv8",
  authDomain: "vender-chat-plugin.firebaseapp.com",
  databaseURL: "https://vender-chat-plugin-default-rtdb.firebaseio.com",
  projectId: "vender-chat-plugin",
  storageBucket: "vender-chat-plugin.appspot.com",
  messagingSenderId: "748089670667",
  appId: "1:748089670667:web:d62cfd307513065db99b0e",
  measurementId: "G-FJ3DNEN5JY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
