import { handleActions } from "redux-actions";
import types from "../../lib/action-types";
import initialState from "../../data/initial-state";

const productsReducer = handleActions({
  [types.PRODUCT_SELECT]: (state, { payload: { id } }) => ({
    products: [...state.products].map((product) => {
      if (product.id === id) {
        const isChecked = true;
        const checkedProduct = {
          ...product,
          isChecked
        };
        return checkedProduct;
      }
      return product;
    })
  }),
  [types.PRODUCT_DESELECT]: (state, { payload: { id } }) => ({
    products: [...state.products].map((product) => {
      if (product.id === id) {
        const isChecked = false;
        const isDefaultChecked = false;
        const unCheckedProduct = {
          ...product,
          isChecked,
          isDefaultChecked
        };
        return unCheckedProduct;
      }
      return product;
    })
  }),
  [types.PRODUCT_DEFAULT_SELECT]: (state) => ({
    products: [...state.products].map((product) => {
      const isDefaultChecked = product.isChecked;
      return {
        ...product,
        isDefaultChecked
      };
    })
  })
}, {
  products: initialState.products
});

export default productsReducer;
