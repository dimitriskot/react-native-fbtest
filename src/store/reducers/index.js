import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import market from "./market";
import routeEditor from "./route-editor";

const fbTestApp = combineReducers({
  routing: routerReducer,
  market,
  routeEditor
});

export default fbTestApp;
