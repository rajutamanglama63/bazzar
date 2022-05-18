import * as firebase from 'firebase';

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAeVWP-KR3dRO5x2GbnjomnmjHaRe9O708",
  
    authDomain: "olxreactnativeexpo.firebaseapp.com",
  
    projectId: "olxreactnativeexpo",
  
    storageBucket: "olxreactnativeexpo.appspot.com",
  
    messagingSenderId: "323620753214",
  
    appId: "1:323620753214:web:31db94d0ec70307036a66f"
  
  };
  
  
// Initialize Firebase
let app;

if(firebase.app.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const { auth } = firebase.auth()

export default auth