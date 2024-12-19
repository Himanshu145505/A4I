import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA0-lDIePsXjmr_PpszECRAQuT9PS_YADE", //This is an invalid key for example only replace it with yours
  authDomain: "deadpool-4a782.firebaseapp.com",
  projectId: "deadpool-4a782",
  storageBucket: "deadpool-4a782.firebasestorage.app",
  messagingSenderId: "879947066889",
  appId: "1:879947066889:web:9de209c0ee40fbc91392d8",
  measurementId: "G-J2JEHM47RX",
};

const app = initializeApp(firebaseConfig);

export default app;
