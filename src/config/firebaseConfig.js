import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

export var firebaseConfig = {
    apiKey: "AIzaSyDyBU4wt5wBlFPlVuKXg87xNQ3UXSVtUv0",
    authDomain: "todo-fd14d.firebaseapp.com",
    projectId: "todo-fd14d",
    storageBucket: "todo-fd14d.appspot.com",
    messagingSenderId: "1009564772746",
    appId: "1:1009564772746:web:9bf24af433ed5efc520073"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase