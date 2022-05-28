import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCvXMDGU7XltpMyb0SEYLWJ_mowzhkzyyc",
  authDomain: "project-75-cc9ca.firebaseapp.com",
  projectId: "project-75-cc9ca",
  storageBucket: "project-75-cc9ca.appspot.com",
  messagingSenderId: "287919596183",
  appId: "1:287919596183:web:2d242df85c1530ba8a3fd2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
