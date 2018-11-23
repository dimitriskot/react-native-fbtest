import Main from "../components/Main";
import HtmlTask from "../components/HtmlTask";
import JsTask from "../components/JsTask";

const routes = [
  {
    path: "/",
    exact: true,
    component: Main,
    id: "main"
  },
  {
    path: "/Html_task",
    exact: false,
    component: HtmlTask,
    id: "html_task"
  },
  {
    path: "/Js_task",
    exact: false,
    component: JsTask,
    id: "js_task"
  }
];

export default routes;
