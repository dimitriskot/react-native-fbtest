import React from "react";
import BackButton from "./common/BackButton";
import ProductList from "./html-task/ProductList";

const HtmlTask = () => {
  return (
    <div className={"html-task"}>
      <BackButton />
      <h1 className={"html-task__title"}>Ты сегодня покормил кота?</h1>
      <div className={"html-task__content"}>
        <ProductList />
      </div>
    </div>
  );
};

export default HtmlTask;
