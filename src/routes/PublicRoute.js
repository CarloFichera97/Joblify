import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
//Component used to lock down the application and run checks
//When accessing other components
//Render when authenticated, push to dashboard if not
export const PublicRoute = (props) =>
  props.isAuthenticated ? (
    <div>
      <Redirect to="/" />
    </div>
  ) : (
    <Route {...props} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  //True if authenticated false if not
});

export default connect(mapStateToProps)(PublicRoute);
