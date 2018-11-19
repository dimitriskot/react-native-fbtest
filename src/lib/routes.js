import Main from "../components/Main";
import HtmlTask from "../components/HtmlTask";
import JsTask from "../components/JsTask";

export const routes = [{
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