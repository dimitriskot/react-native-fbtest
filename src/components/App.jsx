import React from "react";
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Main from "./Main";
import HtmlTask from "./HtmlTask";
import JsTask from "./JsTask";

const history = createBrowserHistory();

const routes = [
  {
    path: "/",
    component: Main
  },
  {
    path: "/Html_task",
    component: HtmlTask
  },
  {
    path: "/Js_task",
    component: JsTask
  }
];

export default class App extends React.Component {
  render() {
    const routeComponents = routes.map(({ path, component }, key) => (
      <Route exact path={path} component={component} key={key} />
    ));
    return (
      <Router history={history}>
        <div className="container">{routeComponents}</div>
      </Router>
    );
  }
}
