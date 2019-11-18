import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const config = {
  apiKey: "AIzaSyBA5tTiKfb9u6hLSBOGmSvppoLWNxAmO0k",
  authDomain: "e-dmtool.firebaseapp.com",
  databaseURL: "https://e-dmtool.firebaseio.com",
  projectId: "e-dmtool",
  storageBucket: "e-dmtool.appspot.com",
  messagingSenderId: "116243195190",
  appId: "1:116243195190:web:79182718e8e93285b23f97",
  measurementId: "G-EHTBJELRCZ"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();
