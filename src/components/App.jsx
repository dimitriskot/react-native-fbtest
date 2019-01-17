import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import routes from "../lib/routes";

const App = () => {
  const routeComponents = routes.map(({ path, exact, component, id }) => (
    <Route exact={exact} path={path} component={component} key={id} />
  ));
  return (
    <Provider store={store}>
      <HashRouter>
        <div className={"app"}>{routeComponents}</div>
      </HashRouter>
    </Provider>
  );
};

export default App;
