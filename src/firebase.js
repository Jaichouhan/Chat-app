// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzj-9CrPXd9gg6Zog3ra1c0xGYIEngw70",
  authDomain: "chat-app-a1411.firebaseapp.com",
  projectId: "chat-app-a1411",
  storageBucket: "chat-app-a1411.appspot.com",
  messagingSenderId: "1081481608283",
  appId: "1:1081481608283:web:9e03abbe5dee3f200b937e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
