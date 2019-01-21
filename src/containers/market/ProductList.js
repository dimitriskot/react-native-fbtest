import { connect } from "react-redux";
import productActions from "../../store/actions/market";
import ProductListComponent from "../../components/market/ProductList";

const mapStateToProps = (state) => {
  return { products: state.market.products };
};

const ProductList = connect(
  mapStateToProps,
  productActions
)(ProductListComponent);

export default ProductList;
