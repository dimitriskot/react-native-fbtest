import React from "react";
import { Product } from "./Product";
import { products } from "../../data/products";

export default class CardList extends React.Component {
	render() {
		const productList = products.map((product, i) => (
			<Product key={i} product={product} />
		));
		return (
			<div className="product-list">
				{productList}
			</div>
		);
	}
}
