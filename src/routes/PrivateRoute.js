import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header.js";
//Component used to lock down the application and run checks
//When accessing other components
//Render when authenticated, push to dashboard if not
export const PrivateRoute = (props) =>
  props.isAuthenticated ? (
    <div>
      <Header />
      <Route {...props} />
    </div>
  ) : (
    <Redirect to="/" />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  //True if authenticated false if not
});

export default connect(mapStateToProps)(PrivateRoute);
