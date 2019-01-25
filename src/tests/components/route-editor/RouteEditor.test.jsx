import React from "react";
import { Provider } from "react-redux";
import MediaQuery from "react-responsive";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import store from "../../../store";
import RouteEditor from "../../../components/route-editor/RouteEditor";
import MapComponent from "../../../containers/route-editor/Map";

describe("RouteEditor component", () => {

  it("render RouteEditor", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/", "/market", "/route-editor"]} initialIndex={1}>
          <Route path={"/route-editor"}>
            <RouteEditor />
          </Route>
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find(MediaQuery)).toHaveLength(2);
    expect(wrapper.find(MapComponent)).toHaveLength(1);
  });

});
