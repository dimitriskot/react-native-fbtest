import Main from "../components/Main";
import Market from "../components/market/Market";
import RouteEditor from "../components/route-editor/RouteEditor";

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
  path: "/route-editor",
  exact: false,
  component: RouteEditor,
  id: "route-editor"
}
];

export default routes;
