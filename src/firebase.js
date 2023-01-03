import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBKnyvvLt-fNLal4B8whkENTDie6XmtwuM",
  authDomain: "x2-crop.firebaseapp.com",
  projectId: "x2-crop",
  storageBucket: "x2-crop.appspot.com",
  messagingSenderId: "854367325822",
  appId: "1:854367325822:web:eb86f6ed37ae6a67ab522f"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export  const db = firebaseApp.firestore();
export  const auth = firebase.auth();