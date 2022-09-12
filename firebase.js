
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCSVyKuCVz8icUeOZ8kN_yc04eofhgfymk",
  authDomain: "food-ordering-app-361916.firebaseapp.com",
  projectId: "food-ordering-app-361916",
  storageBucket: "food-ordering-app-361916.appspot.com",
  messagingSenderId: "843651797570",
  appId: "1:843651797570:web:5e2365d31b3055844a93db"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()
const db = app.firestore()

export {auth, db}; 