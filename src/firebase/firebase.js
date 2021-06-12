//Connection to the database
import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDMkWQ_DbbovtrPxidIyDQD0UafwabXJfo",
  authDomain: "job-tracker-app-1599c.firebaseapp.com",
  databaseURL: "https://job-tracker-app-1599c-default-rtdb.firebaseio.com",
  projectId: "job-tracker-app-1599c",
  storageBucket: "job-tracker-app-1599c.appspot.com",
  messagingSenderId: "986870325892",
  appId: "1:986870325892:web:c33900cf4e3565631518d1",
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
