import React from "react";
import { Provider } from "react-redux";
import store from "../data/store";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import HtmlTask from "./HtmlTask";
import JsTask from "./JsTask";

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
