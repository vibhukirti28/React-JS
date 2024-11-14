import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCdxYHbd-_cJEmKAGPDYaK8TAK28T0uc0c",
  authDomain: "emailauthentication-12e47.firebaseapp.com",
  projectId: "emailauthentication-12e47",
  storageBucket: "emailauthentication-12e47.appspot.com",
  messagingSenderId: "422451947869",
  appId: "1:422451947869:web:c53e09c5eb0430efb260b4"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);