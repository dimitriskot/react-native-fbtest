import { createAction } from "redux-actions";
import types from "../../lib/action-types";

const productSelect = createAction(types.PRODUCT_SELECT);
const productDeselect = createAction(types.PRODUCT_DESELECT);
const productsDefaultSelect = createAction(types.PRODUCT_DEFAULT_SELECT);

// const productSelect = (product) => {
//   return {
//     type: types.PRODUCT_SELECT,
//     product
//   };
// };

// const productDeselect = (product) => {
//   return {
//     type: types.PRODUCT_DESELECT,
//     product
//   };
// };

// const productsDefaultSelect = () => {
//   return {
//     type: types.PRODUCT_DEFAULT_SELECT
//   };
// };

export default {
  productSelect,
  productDeselect,
  productsDefaultSelect
};
