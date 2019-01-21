import { handleActions } from "redux-actions";
import types from "../../lib/action-types/route-editor";
import initialState from "../../data/initial-state";

const routeEditor = handleActions({
  [types.GET_MAP_CENTER]: (state, { payload: { lat, lng } }) => ({
    map: {
      ...state.map,
      center: {
        lat: lat(),
        lng: lng()
      }

    }
  }),
  [types.ADD_POINT]: (state, { payload }) => ({
    map: {
      ...state.map,
      points: [
        ...state.map.points,
        payload
      ]
    }
  }),
  [types.DELETE_POINT]: (state, { payload }) => {
    const id = payload;
    const points = [...state.map.points];
    const index = points.findIndex((point) => point.id === id);
    points.splice(index, 1);
    return {
      ...state,
      map: {
        ...state.map,
        points
      }
    };
  },
  [types.CHANGE_POINT_POSITION]: (state, { payload: { id, latLng } }) => {
    const position = latLng;
    const points = [...state.map.points].map((point) => (point.id === id ? { ...point, position } : point));
    return {
      ...state,
      map: {
        ...state.map,
        points
      }
    };
  },
  [types.CHANGE_POINTS_ORDER]: (state, { payload }) => ({
    map: {
      ...state.map,
      points: payload
    }
  }),
  [types.GET_DIRECTIONS]: (state, { payload }) => ({
    map: {
      ...state.map,
      directions: payload
    }
  })
}, { map: initialState.map });

export default routeEditor;
