import { createAction } from "redux-actions";
import types from "../../lib/action-types/route-editor";

const getMapCenter = createAction(types.GET_MAP_CENTER);
const addPoint = createAction(types.ADD_POINT);
const deletePoint = createAction(types.DELETE_POINT);
const changePointPosition = createAction(types.CHANGE_POINT_POSITION);
const changePointsOrder = createAction(types.CHANGE_POINTS_ORDER);
const getDirections = createAction(types.GET_DIRECTIONS);

export default {
  getMapCenter,
  addPoint,
  deletePoint,
  changePointPosition,
  changePointsOrder,
  getDirections
};
