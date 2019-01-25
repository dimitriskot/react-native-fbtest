import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductListComponent from "../../components/market/ProductList";
import productActions from "../../store/actions/market";

class ProductListContainer extends React.Component {

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
    const { id } = product;
    const card = e.currentTarget;
    const cardBody = card.nextElementSibling;
    if (!card.checked) {
      cardBody.classList.remove("product-body--hover");
    }
    product.isChecked ? productDeselect({ id }) : productSelect({ id });
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
    return (
      <ProductListComponent
        products={products}
        handleChange={this.handleChange}
        handleMouseLeave={this.handleMouseLeave}
        handleLabelClick={this.handleLabelClick}
      />
    );
  }

}

ProductListContainer.propTypes = {
  products: PropTypes.array,
  productsDefaultSelect: PropTypes.func,
  productSelect: PropTypes.func,
  productDeselect: PropTypes.func
};

const mapStateToProps = (state) => {
  return { products: state.market.products };
};

const ProductList = connect(
  mapStateToProps,
  productActions
)(ProductListContainer);

export default ProductList;
