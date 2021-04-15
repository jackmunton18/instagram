import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBehA7OH9-HVBLEjirmZac9cd2AuzW38NI",
    authDomain: "instagram-cdb83.firebaseapp.com",
    projectId: "instagram-cdb83",
    storageBucket: "instagram-cdb83.appspot.com",
    messagingSenderId: "1049941255607",
    appId: "1:1049941255607:web:c5dc5ad8f98ce02825b432",
    measurementId: "G-ZFD26W8X8C"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = firebase.firestore;

export {
    firebase, 
    FieldValue
}