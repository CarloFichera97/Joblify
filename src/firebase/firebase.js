//Connection to the database
import firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(config);
//Instance of a provider to provide Authentication -- Google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const gitHubAuthProvider = new firebase.auth.GithubAuthProvider();

const database = firebase.database();

export {
  firebase,
  database as default,
  googleAuthProvider,
  facebookAuthProvider,
  gitHubAuthProvider,
};
