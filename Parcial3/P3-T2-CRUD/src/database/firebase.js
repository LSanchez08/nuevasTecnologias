import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsDSMp_dvGbDSwsoOfsgUupGoEHki2YUQ",
  authDomain: "segundo-intent0.firebaseapp.com",
  projectId: "segundo-intent0",
  storageBucket: "segundo-intent0.appspot.com",
  messagingSenderId: "1080429051799",
  appId: "1:1080429051799:web:f627784633a13a970fced2"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default {
  firebase,
  database
};
