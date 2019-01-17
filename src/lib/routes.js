import Main from "../components/Main";
import Market from "../components/market/Market";
import JsTask from "../components/JsTask";

const routes = [{
  path: "/",
  exact: true,
  component: Main,
  id: "main"
},
{
  path: "/market",
  exact: false,
  component: Market,
  id: "market"
},
{
  path: "/Js_task",
  exact: false,
  component: JsTask,
  id: "js_task"
}
];

export default routes;
