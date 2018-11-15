import React from "react";
import { CardItem } from "./CardItem";
import { products } from "../../data/products";

export default class CardList extends React.Component {
  render() {
    const isChecked = false;
    const isDisabled = false;

    return (
      <div className="card-list">
        <CardItem isChecked={isChecked} isDisabled={isDisabled} />
        {/* <CardItem />
        <CardItem /> */}
      </div>
    );
  }
}
