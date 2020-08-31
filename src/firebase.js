import firebase from 'firebase';

firebase.database.enableLogging(true);

const firebaseConfig = {
    apiKey: "AIzaSyCsPOS_mPnRTnk6l0XgBdr3YzsgZDZb_ec",
    authDomain: "facebook-clone-4969b.firebaseapp.com",
    databaseUL: "https://facebook-clone-4969b.firebaseio.com",
    projectId: "facebook-clone-4969b",
    storageBucket: "facebook-clone-4969b.appspot.com",
    messagingSenderId: "908333977754",
    appId: "1:908333977754:web:a232069b44d1098ac30f23",
    measurementId: "G-JFR7EHXME2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;
