import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";

class ProductListComponent extends React.Component {
  componentDidMount() {
    const { productsDefaultSelect } = this.props;
    productsDefaultSelect();
  }

  isProductSelect = (product) => {
    const { products } = this.props;
    return products.findIndex((el) => el.id === product.id) > -1;
  };

  handleChange = (product, e) => {
    const { productSelect, productDeselect } = this.props;
    const card = e.currentTarget;
    const cardBody = card.nextElementSibling;
    if (!card.checked) {
      cardBody.classList.remove("product-body--hover");
    }
    product.isChecked ? productDeselect(product) : productSelect(product);
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
  productsDefaultSelect: PropTypes.func,
  productSelect: PropTypes.func,
  productDeselect: PropTypes.func
};

export default ProductListComponent;
