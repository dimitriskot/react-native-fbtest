import initialState from "../../../data/initial-state";
import reducer from "../../../store/reducers/route-editor";
import routeEditorTypes from "../../../lib/action-types/route-editor";
import { randomId } from "../../../utils";

describe("Test reducers", () => {
  const state = { ...initialState.map };
  const {
    GET_MAP_CENTER,
    GET_MAP_ZOOM,
    ADD_POINT,
    DELETE_POINT,
    CHANGE_POINT_POSITION,
    CHANGE_POINTS_ORDER,
    GET_DIRECTIONS
  } = routeEditorTypes;

  describe("for Route Editor.", () => {

    describe("Map reducer", () => {

      it("GET_MAP_CENTER", () => {
        const center = { lat: 57.16, lng: 58.13 };

        const action = { type: GET_MAP_CENTER, payload: center };
        const received = reducer(undefined, action);
        const expected = { ...state, center };

        expect(received).toEqual(expected);
      });

      it("GET_MAP_ZOOM", () => {
        const zoom = 16;

        const action = { type: GET_MAP_ZOOM, payload: { zoom } };
        const received = reducer(undefined, action);
        const expected = { ...state, zoom };

        expect(received).toEqual(expected);
      });

      it("ADD_POINT", () => {
        const position = { lat: 57.16, lng: 58.13 };
        const point = {
          id: randomId(),
          title: "point",
          position,
          draggable: true,
          handleDragEnd: jest.fn()
        };

        const action = { type: ADD_POINT, payload: { point } };
        const received = reducer(undefined, action);
        const expected = { ...state, points: [...state.points, point] };

        expect(received).toEqual(expected);
      });

      it("DELETE_POINT", () => {
        const id = randomId();
        const position = { lat: 57.16, lng: 58.13 };
        const point = {
          id,
          title: "point",
          position,
          draggable: true,
          handleDragEnd: jest.fn()
        };
        const pointsReceived = state.points.slice();
        pointsReceived.push(point);
        const stateReceived = { ...state, points: pointsReceived };

        const action = { type: DELETE_POINT, payload: { id } };
        const received = reducer(stateReceived, action);
        const expected = { ...state, points: state.points };

        expect(received).toEqual(expected);
      });

      it("CHANGE_POINT_POSITION", () => {
        const id = randomId();
        const latLng = { lat: 57.16, lng: 58.13 };
        const point = {
          id,
          title: "point",
          position: { lat: 67.56, lng: 48.73 },
          draggable: true,
          handleDragEnd: jest.fn()
        };
        state.points.push(point);

        const action = { type: CHANGE_POINT_POSITION, payload: { id, latLng } };
        const received = reducer(state, action).points.filter((el) => el.id === id)[0].position;
        const expected = latLng;

        expect(received).toEqual(expected);
      });

      it("CHANGE_POINTS_ORDER", () => {
        const oldPoints = [1, 2, 3];
        const newPoints = [2, 3, 1];
        const stateReceived = { ...state, points: oldPoints };

        const action = { type: CHANGE_POINTS_ORDER, payload: { newPoints } };
        const received = reducer(stateReceived, action);
        const expected = { ...state, points: newPoints };

        expect(received).toEqual(expected);
      });

      it("GET_DIRECTIONS", () => {
        const directions = {};

        const action = { type: GET_DIRECTIONS, payload: { directions } };
        const received = reducer(undefined, action);
        const expected = { ...state, directions };

        expect(received).toEqual(expected);
      });

    });
  });
});
