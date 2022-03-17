import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAq7dhHy5usBq7jCYfOAgpl8gf59ushDR8",
  authDomain: "coder-space-33316.firebaseapp.com",
  projectId: "coder-space-33316",
  storageBucket: "coder-space-33316.appspot.com",
  messagingSenderId: "802608275801",
  appId: "1:802608275801:web:8805819afaf80cbc04ac48",
  measurementId: "G-NC7KVNHPWR"
};

export const app = initializeApp(firebaseConfig)

