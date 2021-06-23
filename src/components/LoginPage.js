import React from "react";
import { connect } from "react-redux";
import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
  gitHubAuthProvider,
} from "../firebase/firebase";

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      social: true,
    };
  }
  loginWithSocial = () => {
    if (this.state.social === true) {
      this.setState(() => ({
        social: false,
      }));
    } else if (this.state.social === false) {
      this.setState(() => ({
        social: true,
      }));
    }
  };

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Joblify</h1>
          <p className="box-layout__paragraph">
            It is time to get your Job Applications under control!
          </p>
          <button className="lbtn" onClick={this.loginWithSocial}>
            Login with Social
          </button>
          <p>
            {this.state.social && (
              <GoogleLoginButton className="lbtn" onClick={startGoogleLogin} />
            )}
          </p>
          <p>
            {this.state.social === true ? (
              <FacebookLoginButton
                className="lbtn"
                onClick={startFacebookLogin}
              />
            ) : (
              ""
            )}
          </p>
          <p>
            {this.state.social && (
              <GithubLoginButton className="lbtn" onClick={startGithubLogin} />
            )}
          </p>
        </div>
      </div>
    );
  }
}
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
