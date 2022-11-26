// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbqG9ydHSWyQSJLeH5MWlPwSm384N9-k8",
  authDomain: "chat-app-2-6f9e1.firebaseapp.com",
  projectId: "chat-app-2-6f9e1",
  storageBucket: "chat-app-2-6f9e1.appspot.com",
  messagingSenderId: "919058324655",
  appId: "1:919058324655:web:cc0e19a801cfd60027885a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)