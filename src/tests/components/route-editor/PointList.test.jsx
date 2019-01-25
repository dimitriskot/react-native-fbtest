import React from "react";
import { mount } from "enzyme";
import PointList from "../../../components/route-editor/form/PointList";
import PointItem from "../../../components/route-editor/form/PointItem";
import { randomId } from "../../../utils";

describe("PointList component", () => {

  it("render PointList", () => {
    const id = randomId();
    const props = {
      points: [{ id }],
      onDeleteButtonClick: jest.fn()
    };
    const wrapper = mount(<PointList {...props} />);
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find(PointItem)).toHaveLength(props.points.length);
  });

});
