import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

class ProductListComponent extends React.Component {
  componentDidMount() {
    const { onProductsDefaultSelect } = this.props;
    onProductsDefaultSelect();
  }

  isProductSelect = (product) => {
    const { products } = this.props;
    return products.findIndex((el) => el.id === product.id) > -1;
  };

  handleChange = (product, e) => {
    const { onProductSelect, onProductDeselect } = this.props;
    const card = e.currentTarget;
    const cardBody = card.nextElementSibling;
    if (!card.checked) {
      cardBody.classList.remove("product-body--hover");
    }
    product.isChecked ? onProductDeselect(product) : onProductSelect(product);
  };

  handleMouseLeave = (product, e) => {
    const cardBody = e.currentTarget;
    if (product.isChecked && !cardBody.classList.contains("product-body--hover")) {
      cardBody.classList.add("product-body--hover");
    }
  };

  handleLabelClick = (product, e) => {
    const cardLabel = e.currentTarget;
    const cardBody = cardLabel.parentElement.parentElement.previousElementSibling;
    cardBody.classList.add("product-body--hover");
  };

  render() {
    const { products } = this.props;
    const productList = products.map((product) => (
      <Product
        key={product.id}
        product={product}
        handleChange={this.handleChange.bind(this, product)}
        handleMouseLeave={this.handleMouseLeave.bind(this, product)}
        handleLabelClick={this.handleLabelClick.bind(this, product)}
      />
    ));
    return <div className={"product-list"}>{productList}</div>;
  }
}

ProductListComponent.propTypes = {
  products: PropTypes.array,
  onProductsDefaultSelect: PropTypes.func,
  onProductSelect: PropTypes.func,
  onProductDeselect: PropTypes.func
};

export default ProductListComponent;
