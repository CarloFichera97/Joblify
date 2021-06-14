import React from "react";
import { connect } from "react-redux";
import { firebase, googleAuthProvider } from "../firebase/firebase";
const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  );
};
const startLogin = () => {
  firebase.auth().signInWithPopup(googleAuthProvider);
};

export const startLogout = () => {
  firebase.auth().signOut();
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
