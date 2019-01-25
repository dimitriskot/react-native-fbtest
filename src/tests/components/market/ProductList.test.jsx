import React from "react";
import { shallow } from "enzyme";
import products from "../../../data/products";
import ProductList from "../../../components/market/ProductList";
import Product from "../../../components/market/Product";

describe("ProductList component", () => {

  it("render ProductList", () => {
    const props = {
      products,
      handleChange: jest.fn(),
      handleMouseLeave: jest.fn(),
      handleLabelClick: jest.fn()
    };
    const wrapper = shallow(<ProductList {...props} />);
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find(Product)).toHaveLength(products.length);
  });

});
