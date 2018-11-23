import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../data/store";
import routes from "../lib/routes";
import config from "../lib/config";

const isProduction = config.mode === "production";
const Router = isProduction ? HashRouter : BrowserRouter;

const App = () => {
  const routeComponents = routes.map(({ path, exact, component, id }) => (
    <Route exact={exact} path={path} component={component} key={id} />
  ));
  return (
    <Provider store={store}>
      <Router>
        <div className={"app"}>{routeComponents}</div>
      </Router>
    </Provider>
  );
};

export default App;
