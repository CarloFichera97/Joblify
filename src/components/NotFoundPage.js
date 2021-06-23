import React from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "./Header";
window.onload = function () {
  document.querySelector(".cont_principal").className =
    "cont_principal cont_error_active";
};

const NotFoundPage = () => (
  <div>
    {" "}
    <Header />
    <div className="box-layout_notfound">
      <div className="face">
        <div className="band">
          <div className="green"></div>
          <div className="white"></div>
          <div className="red"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>
      <Link to="/dashboard" className="not_found_title">
        ERROR 404 - The Developer probably fell asleep
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
