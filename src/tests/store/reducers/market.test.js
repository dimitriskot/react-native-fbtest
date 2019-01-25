import initialState from "../../../data/initial-state";
import reducer from "../../../store/reducers/market";
import marketTypes from "../../../lib/action-types/market";

describe("Test reducers", () => {
  const state = { ...initialState.market };
  const {
    PRODUCT_SELECT,
    PRODUCT_DESELECT,
    PRODUCT_DEFAULT_SELECT
  } = marketTypes;

  describe("for Market. Reducers must return an array of updated products' data", () => {

    it("PRODUCT_SELECT", () => {
      const id = "foiegras";
      const action = {
        type: PRODUCT_SELECT,
        payload: { id }
      };
      const received = reducer(state, action).products.filter((el) => el.id === id)[0].isChecked;

      expect(received).toBeTruthy();
    });

    it("PRODUCT_DESELECT", () => {
      const id = "foiegras";
      const action = {
        type: PRODUCT_DESELECT,
        payload: { id }
      };
      const stateBefore = { ...state };
      stateBefore.products.map((el) => {
        if (el.id === id) {
          const isChecked = true;
          const isDefaultChecked = true;
          const product = {
            ...el,
            isChecked,
            isDefaultChecked
          };
          return product;
        }
        return el;
      });

      const received = reducer(stateBefore, action).products.filter((el) => el.id === id)[0];

      expect(received.isChecked).toBeFalsy();
      expect(received.isDefaultChecked).toBeFalsy();
    });

    it("PRODUCT_DEFAULT_SELECT", () => {
      const action = { type: PRODUCT_DEFAULT_SELECT };

      const received = reducer(state, action);
      const expected = {
        ...state,
        products: state.products.map((el) => {
          const isDefaultChecked = el.isChecked;
          return {
            ...el,
            isDefaultChecked
          };
        })
      };

      expect(received).toEqual(expected);
    });
  });
});
