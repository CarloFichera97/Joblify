require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import AppRouter from "./routes/AppRoutes";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
