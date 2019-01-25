import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import Main from "../../components/Main";

describe("Main component", () => {

  it("render Main", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/", "/market", "/route-editor"]} initialIndex={0}>
        <Route path={"/"}>
          <Main />
        </Route>
      </MemoryRouter>
    );
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find("div.main")).toHaveLength(1);
    expect(wrapper.find("a.main__link")).toHaveLength(2);
  });

});
