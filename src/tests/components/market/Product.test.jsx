import React from "react";
import { mount, shallow } from "enzyme";
import products from "../../../data/products";
import Product from "../../../components/market/Product";

describe("Product component", () => {

  const props = {
    key: products[0].id,
    product: products[0],
    handleChange: jest.fn(),
    handleMouseLeave: jest.fn(),
    handleLabelClick: jest.fn()
  };

  it("render Product", () => {
    const wrapper = mount(<Product {...props} />);
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find("input.product-input")).toHaveLength(1);
  });

  it("input change", () => {
    const wrapper = mount(<Product {...props} />);
    wrapper.setProps({ ...props, product: { ...props.product, isChecked: true } });
    const input = wrapper.find("input.product-input");
    expect(input.props().checked).toBeTruthy();
  });

  it("input disabled", () => {
    const wrapper = mount(<Product {...props} />);
    const input = wrapper.find("input.product-input");
    expect(input.props().disabled).toBeFalsy();
    wrapper.setProps({ ...props, product: { ...props.product, isDisabled: true } });
    const disabledInput = wrapper.find("input.product-input");
    expect(disabledInput.props().disabled).toBeTruthy();
  });

  it("handleChange", () => {
    const wrapper = shallow(<Product {...props} />);
    const input = wrapper.find("input.product-input");
    input.simulate("change", { target: props.product });
    expect(props.handleChange).toBeCalledTimes(1);
    expect(props.handleChange).toHaveBeenCalledWith({ target: props.product });
  });

  it("handleMouseLeave", () => {
    const wrapper = shallow(<Product {...props} />);
    const label = wrapper.find("label.product-body");
    label.simulate("mouseleave", { target: props.product });
    expect(props.handleMouseLeave).toBeCalledTimes(1);
    expect(props.handleMouseLeave).toHaveBeenCalledWith({ target: props.product });
  });

});
