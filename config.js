import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCRIpP7qE84sZApAaG1muxq059AkG8LhBQ",
  authDomain: "book-santa-9bc19.firebaseapp.com",
  databaseURL: "https://book-santa-9bc19.firebaseio.com",
  projectId: "book-santa-9bc19",
  storageBucket: "book-santa-9bc19.appspot.com",
  messagingSenderId: "937826227424",
  appId: "1:937826227424:web:a118cb487703a4c7552c85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
