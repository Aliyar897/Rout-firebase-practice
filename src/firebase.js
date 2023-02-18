
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
 const firebaseConfig = {
  apiKey: "AIzaSyB214fnEFQIoRlErWdOkukD3AfBa-boyuw",
  authDomain: "todo-app-1b887.firebaseapp.com",
  projectId: "todo-app-1b887",
  storageBucket: "todo-app-1b887.appspot.com",
  messagingSenderId: "261598466072",
  appId: "1:261598466072:web:b2769e9a86bdd88511f36d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth}