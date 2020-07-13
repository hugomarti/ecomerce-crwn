import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlsDwqNY7E1B250w9GXhufqxEZfkPjIeQ",
  authDomain: "crwn-db3-f6166.firebaseapp.com",
  databaseURL: "https://crwn-db3-f6166.firebaseio.com",
  projectId: "crwn-db3-f6166",
  storageBucket: "crwn-db3-f6166.appspot.com",
  messagingSenderId: "713918692390",
  appId: "1:713918692390:web:939c8f3f35e63b0005fae7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
