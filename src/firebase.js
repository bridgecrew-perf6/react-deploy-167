import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBic0yipL6n63-ch_bj4evvM0XVcLCkqr4",
    authDomain: "matt-task-manager.firebaseapp.com",
    databaseURL: "https://matt-task-manager.firebaseio.com",
    projectId: "matt-task-manager",
    storageBucket: "matt-task-manager.appspot.com",
    messagingSenderId: "728902353168",
    appId: "1:728902353168:web:38283d15434152f168a595",
    measurementId: "G-PXPFLK2R8X",
});

export { firebaseConfig as firebase};

