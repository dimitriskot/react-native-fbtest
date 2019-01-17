import { connect } from "react-redux";
import productActions from "../../store/actions/products";
import ProductListComponent from "../../components/market/ProductList";

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProductSelect: (product) => {
      dispatch(productActions.productSelect(product));
    },
    onProductDeselect: (product) => {
      dispatch(productActions.productDeselect(product));
    },
    onProductsDefaultSelect: () => {
      dispatch(productActions.productsDefaultSelect());
    }
  };
};

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListComponent);

export default ProductList;
