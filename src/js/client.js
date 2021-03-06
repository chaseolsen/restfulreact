import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
// import ExternalFrame from "./components/ExternalFrame";
import Login from "./pages/Login";
import Chart from "./pages/Chart";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>

      <Route path="/" component={Layout}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/chart" component={Chart}></Route>




  </Router>,
  app);
