import routeEditorActions from "../../../store/actions/route-editor";
import routeEditorTypes from "../../../lib/action-types/route-editor";

describe("Test actions", () => {
  describe("for Route Editor", () => {
    const {
      getMapCenter,
      getMapZoom,
      addPoint,
      deletePoint,
      changePointPosition,
      changePointsOrder,
      getDirections
    } = routeEditorActions;

    const {
      GET_MAP_CENTER,
      GET_MAP_ZOOM,
      ADD_POINT,
      DELETE_POINT,
      CHANGE_POINT_POSITION,
      CHANGE_POINTS_ORDER,
      GET_DIRECTIONS
    } = routeEditorTypes;


    it("getMapCenter() must return an action with type 'GET_MAP_CENTER' and object with lat/lng data", () => {
      const center = { lat: 56.12, lng: 147.32 };
      const received = getMapCenter(center);
      const expected = {
        type: GET_MAP_CENTER,
        payload: center
      };
      expect(received).toEqual(expected);
    });

    it("getMapZoom() must return an action with type 'GET_MAP_ZOOM' and zoom value", () => {
      const zoom = 15;
      const received = getMapZoom({ zoom });
      const expected = {
        type: GET_MAP_ZOOM,
        payload: { zoom }
      };
      expect(received).toEqual(expected);
    });

    it("addPoint() must return an action with type 'ADD_POINT' and new point's object", () => {
      const point = {};
      const received = addPoint(point);
      const expected = {
        type: ADD_POINT,
        payload: point
      };
      expect(received).toEqual(expected);
    });

    it("deletePoint() must return an action with type 'DELETE_POINT' and deleting point's id", () => {
      const id = "_3szz347y2";
      const received = deletePoint({ id });
      const expected = {
        type: DELETE_POINT,
        payload: { id }
      };
      expect(received).toEqual(expected);
    });

    it("changePointPosition() must return an action with type 'CHANGE_POINT_POSITION', point's id and position", () => {
      const data = { id: "_3szz347y2", latLng: {} };
      const received = changePointPosition(data);
      const expected = {
        type: CHANGE_POINT_POSITION,
        payload: data
      };
      expect(received).toEqual(expected);
    });

    it("changePointsOrder() must return an action with type 'CHANGE_POINTS_ORDER' and new points array", () => {
      const points = [1, 2, 3];
      const received = changePointsOrder(points);
      const expected = {
        type: CHANGE_POINTS_ORDER,
        payload: points
      };
      expect(received).toEqual(expected);
    });

    it("getDirections() must return an action with type 'GET_DIRECTIONS' and object with directions' data", () => {
      const directions = {};
      const received = getDirections(directions);
      const expected = {
        type: GET_DIRECTIONS,
        payload: directions
      };
      expect(received).toEqual(expected);
    });
  });
});
