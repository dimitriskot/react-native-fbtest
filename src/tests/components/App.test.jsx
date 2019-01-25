import React from "react";
import { Route } from "react-router-dom";
import { shallow } from "enzyme";
import App from "../../components/App";
import routes from "../../lib/routes";

describe("App component", () => {

  it("render App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find(Route)).toHaveLength(routes.length);
  });

});
