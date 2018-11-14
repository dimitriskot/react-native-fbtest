import React from "react";
import * as classNames from "classnames";

export const CardItem = () => {
  const isChecked = true;

  return (
    <div className={classNames("card-item", isChecked && "card-item--checked")}>
      <div className="card-body">
        <p class="card-body__subtitle card-body__subtitle--default">
          Сказочное заморское яство
        </p>
        <p class="card-body__subtitle card-body__subtitle--question">
          Котэ не одобряет?
        </p>
        <div className="card-body__scaffold" />
      </div>
    </div>
  );
};
