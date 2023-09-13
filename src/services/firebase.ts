// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { singInWithEmailAbdPassword. createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA8Q4QX-iZvKp6ml1jPRGO5LdoFol4c1wI',
  authDomain: 'api-2023-2e60e.firebaseapp.com',
  projectId: 'api-2023-2e60e',
  storageBucket: 'api-2023-2e60e.appspot.com',
  messagingSenderId: '873173145084',
  appId: '1:873173145084:web:ba1468d5b3efe71a854e79',
  measurementId: 'G-NE54D9NX4H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();

export function singIn(usuario: string, senha: string) {
  return singInWithEmailAbdPassword(auth, usuario, senha);
}
export function createUser(usuario: string, senha: string) {
  return createUserWithEmailAndPassword(auth, usuario, senha);
}
