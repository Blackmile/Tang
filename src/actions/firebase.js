import firebase from 'firebase'
import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBLYNe4CKmPICgF5v_URdC4f40UNSV2R_c",
  authDomain: "favi-2e1f3.firebaseapp.com",
  projectId: "favi-2e1f3",
  storageBucket: "favi-2e1f3.appspot.com",
  messagingSenderId: "356984054810",
  appId: "1:356984054810:web:44dc9020cdc5ba9d4adda3"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(app);
export const storage = firebase.storage(app);
export const db = firebase.firestore(app, {
    experimentalForceLongPolling: true,
});


export function signIn (email, password) {
    // return signInWithEmailAndPassword(auth, email, password)
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function signUp (email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function logOut() {
  return firebase.auth().signOut()
}