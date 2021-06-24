import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import NotFoundPage from "./../components/NotFoundPage";
import JobApplicationDashboard from "./../components/JobApplicationDashboard";
import EditJobApplication from "./../components/EditJobApplication";
import AddJobApplication from "./../components/AddJobApplication";
import ViewJobApplication from "./../components/ViewJobApplication";
import LoginPage from "../components/LoginPage.js";
//Route functionality belkow in the Switch is going to be handled by PrivateRoute.js file
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
//Useful to have history available everywhere in the app and redirect
export const history = createBrowserHistory();

const AppRouter = () => (
  //Switching from BrowserRouter to Router in order to use my own history
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/dashboard"
          exact={true}
          component={JobApplicationDashboard}
        />
        <PrivateRoute
          path="/create"
          exact={true}
          component={AddJobApplication}
        />
        <PrivateRoute path="/edit/:id" component={EditJobApplication} />
        <PrivateRoute path="/view/:id" component={ViewJobApplication} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
