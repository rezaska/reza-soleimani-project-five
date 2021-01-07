import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCQlcxkTqlU4_M2s3lSLpcmi25C3YppDP0",
  authDomain: "project-5-nextwatch.firebaseapp.com",
  projectId: "project-5-nextwatch",
  storageBucket: "project-5-nextwatch.appspot.com",
  messagingSenderId: "797553448924",
  appId: "1:797553448924:web:d0dd861b317d8ad20ba119"
};

firebase.initializeApp(firebaseConfig);
export default firebase;