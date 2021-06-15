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

//Once logged in the following happens
//1. Set the value of user id onto the store
//2. fetch the data on the database related to that user
//3. Display the data on screen to the user

//Looking whether there is actually a value for the Id to check if we are authenticated or not
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
  //True if authenticated false if not
});

export default connect(mapStateToProps)(PrivateRoute);
