import { handleActions } from "redux-actions";
import types from "../../lib/action-types/route-editor";
import initialState from "../../data/initial-state";

const routeEditor = handleActions({
  [types.GET_MAP_CENTER]: (state, { payload: { lat, lng } }) => (
    { ...state, center: { lat, lng } }
  ),
  [types.GET_MAP_ZOOM]: (state, { payload: { zoom } }) => (
    { ...state, zoom }
  ),
  [types.ADD_POINT]: (state, { payload: { point } }) => (
    { ...state, points: [...state.points, point] }
  ),
  [types.DELETE_POINT]: (state, { payload: { id } }) => {
    const points = [...state.points];
    const index = points.findIndex((point) => point.id === id);
    points.splice(index, 1);
    return { ...state, points };
  },
  [types.CHANGE_POINT_POSITION]: (state, { payload: { id, latLng } }) => {
    const position = latLng;
    const points = [...state.points].map((point) => (point.id === id ? { ...point, position } : point));
    return { ...state, points };
  },
  [types.CHANGE_POINTS_ORDER]: (state, { payload: { newPoints } }) => (
    { ...state, points: newPoints }
  ),
  [types.GET_DIRECTIONS]: (state, { payload: { directions } }) => (
    { ...state, directions }
  )
}, { ...initialState.map });

export default routeEditor;
