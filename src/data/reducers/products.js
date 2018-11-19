import {
	types
} from "../actions/types";
import {
	productsData
} from "../products";

const initialState = {
	products: [...productsData]
}

const productsReducer = (state = initialState, action) => {
	let products;
	switch (action.type) {
		case types.PRODUCT_SELECT:
			products = [...state.products].map((product) => {
				if (product.id === action.product.id) {
					const isChecked = true;
					const checkedProduct = { ...action.product,
						isChecked
					};
					return checkedProduct;
				}
				return product;
			});
			return {
				...state,
				products
			}
		case types.PRODUCT_DESELECT:
			products = [...state.products].map((product) => {
				if (product.id === action.product.id) {
					const isChecked = false,
						isDefaultChecked = false;
					const unCheckedProduct = { ...action.product,
						isChecked,
						isDefaultChecked
					};
					return unCheckedProduct;
				}
				return product;
			});
			return {
				...state,
				products
			}
		case types.PRODUCT_DEFAULT_SELECT:
			products = [...state.products].map((product) => {
				const isDefaultChecked = product.isChecked;
				return { ...product,
					isDefaultChecked
				};
			});
			return {
				...state,
				products
			}
		default:
			return state
	}
}

export default productsReducer;