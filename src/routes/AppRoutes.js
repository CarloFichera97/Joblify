import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import Header from "./../components/Header.js";
import NotFoundPage from "./../components/NotFoundPage";
import HelpPage from "./../components/HelpPage";
import JobApplicationDashboard from "./../components/JobApplicationDashboard";
import EditJobApplication from "./../components/EditJobApplication";
import AddJobApplication from "./../components/AddJobApplication";
import ViewJobApplication from "./../components/ViewJobApplication";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={JobApplicationDashboard} exact={true} />
        <Route path="/create" component={AddJobApplication} />
        <Route path="/edit/:id" component={EditJobApplication} />
        <Route path="/view/:id" component={ViewJobApplication} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
