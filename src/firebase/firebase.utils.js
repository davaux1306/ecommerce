import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const config = {
  apiKey: "AIzaSyAufim2DPJokE_6jDIHZQ0sDM5zjUqioUQ",
  authDomain: "ecommerce-db-2cca6.firebaseapp.com",
  projectId: "ecommerce-db-2cca6",
  storageBucket: "ecommerce-db-2cca6.appspot.com",
  messagingSenderId: "298796958454",
  appId: "1:298796958454:web:2b35a265db16671a4362d7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
