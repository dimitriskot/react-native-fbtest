import React from "react";
import { shallow } from "enzyme";
import Form from "../../../components/route-editor/form/Form";
import PointList from "../../../components/route-editor/form/PointList";
import { randomId } from "../../../utils";

describe("Form component", () => {

  const id = randomId();
  const props = {
    points: [{ id }],
    value: "point",
    handleValueChange: jest.fn(),
    handleEnterPress: jest.fn(),
    handleCreateButtonClick: jest.fn(),
    handleDeleteButtonClick: jest.fn(),
    handleSortEnd: jest.fn()
  };
  const wrapper = shallow(<Form {...props} />);

  it("render Form", () => {
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find(PointList)).toHaveLength(1);
    expect(wrapper.find("input.map-form__header-input")).toHaveLength(1);
  });

  it("handleValueChange", () => {
    const input = wrapper.find("input.map-form__header-input");
    input.simulate("change", { target: { value: props.value } });
    expect(props.handleValueChange).toBeCalledTimes(1);
    expect(props.handleValueChange).toHaveBeenCalledWith({ target: { value: props.value } });
  });

  it("handleEnterPress", () => {
    const ENTER_KEY = "Enter";
    const input = wrapper.find("input.map-form__header-input");
    input.simulate("keyDown", { key: ENTER_KEY });
    expect(props.handleEnterPress).toBeCalledTimes(1);
    expect(props.handleEnterPress).toHaveBeenCalledWith({ key: ENTER_KEY });
  });

});
