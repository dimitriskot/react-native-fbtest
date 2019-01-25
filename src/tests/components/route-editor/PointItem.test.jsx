import React from "react";
import { shallow } from "enzyme";
import PointItem from "../../../components/route-editor/form/PointItem";
import { randomId } from "../../../utils";

describe("PointItem component", () => {

  const id = randomId();
  const props = {
    id,
    point: { title: "point" },
    onDeleteButtonClick: jest.fn()
  };
  const wrapper = shallow(<PointItem {...props} />);

  it("render PointItem", () => {
    expect(wrapper.render()).toMatchSnapshot();
  });

  it("onDeleteButtonClick", () => {
    const button = wrapper.find("button.map-form__list-item__button");
    button.simulate("click", { id });
    expect(props.onDeleteButtonClick).toBeCalledTimes(1);
    expect(props.onDeleteButtonClick).toHaveBeenCalledWith({ id });
  });

});
