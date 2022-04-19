import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB5rqe8mDWm-uq25_UaU_Zv9AXyfUurf3A",
  authDomain: "tang-245e6.firebaseapp.com",
  projectId: "tang-245e6",
  storageBucket: "tang-245e6.appspot.com",
  messagingSenderId: "957874838519",
  appId: "1:957874838519:web:5f7402b57fb43696766cf2"
};

// Initialize Firebase

let app;
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth }