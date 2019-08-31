import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmfwDnT0qOShKewNZCHRJghNn0bfhT8Fc",
    authDomain: "root-catfish-250516.firebaseapp.com",
    databaseURL: "https://root-catfish-250516.firebaseio.com",
    projectId: "root-catfish-250516",
    storageBucket: "root-catfish-250516.appspot.com",
    messagingSenderId: "1034589410913",
    appId: "1:1034589410913:web:362008c25e382a62"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;