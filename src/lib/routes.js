import Main from "../components/Main";
import HtmlTask from "../components/HtmlTask";
import JsTask from "../components/JsTask";

export const routes = [{
		path: "/",
		exact: true,
		component: Main
	},
	{
		path: "/Html_task",
		exact: false,
		component: HtmlTask
	},
	{
		path: "/Js_task",
		exact: false,
		component: JsTask
	}
];