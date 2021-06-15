import React from "react";
import { connect } from "react-redux";
import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  gitHubAuthProvider,
} from "../firebase/firebase";

const LoginPage = ({
  startGoogleLogin,
  startFacebookLogin,
  startGithubLogin,
}) => {
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Job-Application Tracker</h1>
        <p className="box-layout__paragraph">
          It is time to get your Job Applications under control!
        </p>

        <div className="lbtn lbtn-google">
          <i onClick={startGoogleLogin} className="logo"></i>
          <p className="label">
            <span className="button--Google" onClick={startGoogleLogin}>
              Login with Google
            </span>
          </p>
        </div>
        <div className="lbtn lbtn-facebook">
          <i onClick={startFacebookLogin} className="logo"></i>
          <p className="label">
            <span className="button--Facebook" onClick={startFacebookLogin}>
              Login with Facebook
            </span>
          </p>
        </div>
        <div className="lbtn lbtn-github">
          <i onClick={startGithubLogin} className="logo"></i>
          <p className="label">
            <span className="button--Github" onClick={startGithubLogin}>
              Login with Github
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
const startGoogleLogin = () => {
  firebase.auth().signInWithPopup(googleAuthProvider);
};
const startFacebookLogin = () => {
  firebase.auth().signInWithPopup(facebookAuthProvider);
};
const startGithubLogin = () => {
  firebase.auth().signInWithPopup(gitHubAuthProvider);
};

export const startLogout = () => {
  firebase.auth().signOut();
};

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin()),
  startGithubLogin: () => dispatch(startGithubLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
