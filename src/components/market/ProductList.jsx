import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

const ProductListComponent = (props) => {
  const {
    products,
    handleChange,
    handleMouseLeave,
    handleLabelClick
  } = props;
  const productList = products.map((product) => (
    <Product
      key={product.id}
      product={product}
      handleChange={handleChange.bind(this, product)}
      handleMouseLeave={handleMouseLeave.bind(this, product)}
      handleLabelClick={handleLabelClick.bind(this, product)}
    />
  ));
  return <div className={"product-list"}>{productList}</div>;

};

ProductListComponent.propTypes = {
  products: PropTypes.array,
  handleChange: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  handleLabelClick: PropTypes.func
};

export default ProductListComponent;
