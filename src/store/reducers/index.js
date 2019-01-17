import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import productsReducer from "./products";

const fbTestApp = combineReducers({
  routing: routerReducer,
  productsReducer
});

export default fbTestApp;
