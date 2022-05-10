import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDy76yaGKBAu-lnZhEo5dSF6GdooY2pnNI",
    authDomain: "assignment-2f3a4.firebaseapp.com",
    databaseURL: "https://assignment-2f3a4-default-rtdb.firebaseio.com",
    projectId: "assignment-2f3a4",
    storageBucket: "assignment-2f3a4.appspot.com",
    messagingSenderId: "316320510176",
    appId: "1:316320510176:web:3b0e44d4ac8e3a3ae7e085",
    measurementId: "G-1R5T046EB5"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };