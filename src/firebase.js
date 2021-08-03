import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDpdZEbNbmrBgoFyte3zM8tBnFC8bYHHnA',
  authDomain: 'snapchat-clone-2f3c1.firebaseapp.com',
  projectId: 'snapchat-clone-2f3c1',
  storageBucket: 'snapchat-clone-2f3c1.appspot.com',
  messagingSenderId: '676021866550',
  appId: '1:676021866550:web:fb8bbbbd02f4e79bc94897',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
