import { createAction } from "redux-actions";
import types from "../../lib/action-types/market";

const productSelect = createAction(types.PRODUCT_SELECT);
const productDeselect = createAction(types.PRODUCT_DESELECT);
const productsDefaultSelect = createAction(types.PRODUCT_DEFAULT_SELECT);

export default {
  productSelect,
  productDeselect,
  productsDefaultSelect
};
