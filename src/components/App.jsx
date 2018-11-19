import React from "react";
import { Provider } from "react-redux";
import store from "../data/store";
import { BrowserRouter, Route } from "react-router-dom";
import { routes } from "../lib/routes";

class App extends React.Component {
	render() {
		const routeComponents = routes.map(({ path, component }, key) => (
			<Route exact path={path} component={component} key={key} />
		));
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="app">{routeComponents}</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
