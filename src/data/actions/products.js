import types from "./types";

const productSelect = product => {
  return {
    type: types.PRODUCT_SELECT,
    product
  };
};

const productDeselect = product => {
  return {
    type: types.PRODUCT_DESELECT,
    product
  };
};

const productsDefaultSelect = () => {
  return {
    type: types.PRODUCT_DEFAULT_SELECT
  };
};

export default {
  productSelect,
  productDeselect,
  productsDefaultSelect
};
