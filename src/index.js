import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, BrowserRouter, } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Login from "./components/Login";


const routing = (
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Route path="/profiles" component={App} />
        <Route exact path="/" component={Login} />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(routing, document.getElementById("app"));