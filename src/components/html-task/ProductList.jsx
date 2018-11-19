import React from "react";
import { connect } from "react-redux";
import productActions from "../../data/actions/products";
import { Product } from "./Product";
import { productsData } from "../../data/products";

class ProductList extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const { onProductsDefaultSelect } = this.props;
		onProductsDefaultSelect();
	}

	render() {
		const { products } = this.props;
		const productList = products.map((product, i) => (
			<Product
				key={i}
				product={product}
				handleChange={this.handleChange.bind(this, product)}
				handleMouseLeave={this.handleMouseLeave.bind(this, product)}
			/>
		));
		return (
			<div className="product-list">
				{productList}
			</div>
		);
	}

	isProductSelect = (product) => {
		const { products } = this.props;
		return products.findIndex((el) => el.id === product.id) > -1;
	}

	handleChange = (product, e) => {
		const { onProductSelect, onProductDeselect } = this.props;
		const card = e.currentTarget;
		const cardBody = card.nextSibling;
		if (!card.checked) {
			cardBody.classList.remove("product-body--hover");
		}
		product.isChecked
			? onProductDeselect(product)
			: onProductSelect(product);
	}

	handleMouseLeave = (product, e) => {
		const cardBody = e.currentTarget;
		// console.log(card);
		if (product.isChecked && !cardBody.classList.contains("product-body--hover")) {
			cardBody.classList.add("product-body--hover")
		}
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.productsReducer.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onProductSelect: (product) => {
			dispatch(productActions.productSelect(product))
		},
		onProductDeselect: (product) => {
			dispatch(productActions.productDeselect(product))
		},
		onProductsDefaultSelect: () => {
			dispatch(productActions.productsDefaultSelect())
		}
	}
}

ProductList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductList);

export default ProductList;