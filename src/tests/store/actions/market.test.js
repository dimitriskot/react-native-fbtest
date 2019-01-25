import productActions from "../../../store/actions/market";
import marketTypes from "../../../lib/action-types/market";

describe("Test actions", () => {
  describe("for Market", () => {
    const {
      productSelect,
      productDeselect,
      productsDefaultSelect
    } = productActions;

    const {
      PRODUCT_SELECT,
      PRODUCT_DESELECT,
      PRODUCT_DEFAULT_SELECT
    } = marketTypes;

    it("productSelect() must return an action with type 'PRODUCT_SELECT' and pruduct's id", () => {
      const id = "foiegras";
      const received = productSelect({ id });
      const expected = {
        type: PRODUCT_SELECT,
        payload: { id }
      };
      expect(received).toEqual(expected);
    });

    it("productDeselect() must return an action with type 'PRODUCT_DESELECT' and pruduct's id", () => {
      const id = "fish";
      const received = productDeselect({ id });
      const expected = {
        type: PRODUCT_DESELECT,
        payload: { id }
      };
      expect(received).toEqual(expected);
    });

    it("productsDefaultSelect() must return an action with type 'PRODUCT_DEFAULT_SELECT'", () => {
      const received = productsDefaultSelect();
      const expected = { type: PRODUCT_DEFAULT_SELECT };
      expect(received).toEqual(expected);
    });
  });
});
