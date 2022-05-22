import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8Zl18AyBqZtuK2HNmyznOps9exUjieq0",
  authDomain: "netflix-clone-b164f.firebaseapp.com",
  projectId: "netflix-clone-b164f",
  storageBucket: "netflix-clone-b164f.appspot.com",
  messagingSenderId: "664089430307",
  appId: "1:664089430307:web:5221ca7229a072fe2ba496",
  measurementId: "G-G8YRF3FHLZ",
};

const appConfig = initializeApp(firebaseConfig);

export default appConfig;
