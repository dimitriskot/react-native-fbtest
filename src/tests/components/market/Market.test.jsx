import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import store from "../../../store";
import Market from "../../../components/market/Market";
import ProductList from "../../../containers/market/ProductList";

describe("Market component", () => {

  it("render Market", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/", "/market", "/route-editor"]} initialIndex={1}>
          <Route path={"/market"}>
            <Market />
          </Route>
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.render()).toMatchSnapshot();
    expect(wrapper.find(ProductList)).toHaveLength(1);
  });

});
