import React from "react";
import { Provider } from "react-redux";
import store from "../data/store";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import { routes } from "../lib/routes";
import { config } from "../lib/config";

const isProduction = config.mode === "production";
const Router = isProduction ? HashRouter : BrowserRouter;

class App extends React.Component {
	render() {
		const routeComponents = routes.map(({ path, exact, component }, key) => (
			<Route exact={exact} path={path} component={component} key={key} />
		));
		return (
			<Provider store={store}>
				<Router>
					<div className="app">
						{routeComponents}
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
