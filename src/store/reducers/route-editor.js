import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import types from "../../lib/action-types/route-editor";
import initialState from "../../data/initial-state";

const mapReducer = handleActions({
  [types.GET_MAP_CENTER]: (state, { payload: { lat, lng } }) => ({
    map: {
      ...state.map,
      center: {
        lat: lat(),
        lng: lng()
      }

    }
  }),
  [types.GET_MAP_ZOOM]: (state, { payload }) => ({
    map: {
      ...state.map,
      zoom: payload
    }
  })
}, { map: initialState.routeEditor.map });

const pointsReducer = handleActions({
  [types.ADD_POINT]: (state, { payload }) => ({
    points: [
      ...state.points,
      payload
    ]
  }),
  [types.DELETE_POINT]: (state, { payload }) => {
    const id = payload;
    const points = [...state.points];
    const index = points.findIndex((point) => point.id === id);
    points.splice(index, 1);
    return {
      ...state,
      points
    };
  },
  [types.CHANGE_POINT_POSITION]: (state, { payload: { id, latLng } }) => {
    const position = latLng;
    const points = [...state.points].map((point) => (point.id === id ? { ...point, position } : point));
    return {
      ...state,
      points
    };
  },
  [types.CHANGE_POINTS_ORDER]: (state, { payload }) => ({ points: payload })
}, { points: initialState.routeEditor.points });

const directionsReducer = handleActions({
  [types.GET_DIRECTIONS]: (state, { payload }) => (
    { directions: payload }
  )
}, { directions: initialState.routeEditor.directions });

export const routerReducer = combineReducers({
  mapReducer,
  pointsReducer,
  directionsReducer
});

export default routerReducer;
