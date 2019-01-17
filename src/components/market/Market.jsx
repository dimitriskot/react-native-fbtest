import React from "react";
import BackButton from "../common/BackButton";
import ProductList from "../../containers/market/ProductList";

const Market = () => {
  return (
    <div className={"market"}>
      <BackButton />
      <h1 className={"market__title"}>Ты сегодня покормил кота?</h1>
      <div className={"market__content"}>
        <ProductList />
      </div>
    </div>
  );
};

export default Market;
