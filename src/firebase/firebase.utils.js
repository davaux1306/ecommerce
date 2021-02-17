import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAufim2DPJokE_6jDIHZQ0sDM5zjUqioUQ",
  authDomain: "ecommerce-db-2cca6.firebaseapp.com",
  projectId: "ecommerce-db-2cca6",
  storageBucket: "ecommerce-db-2cca6.appspot.com",
  messagingSenderId: "298796958454",
  appId: "1:298796958454:web:2b35a265db16671a4362d7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
