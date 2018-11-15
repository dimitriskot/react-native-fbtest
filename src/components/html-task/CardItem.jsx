import React from "react";
import * as classNames from "classnames";

export const CardItem = props => {
  const { isChecked, isDisabled } = props;

  return (
    <div
      // className={classNames("card", isChecked && "card--checked")}
      className="card"
    >
      <input
        className="card-input visually-hidden"
        type="checkbox"
        name="food"
        id="foiegras"
      />
      <label className="card-body" htmlFor="foiegras">
        <p className="card-body__subtitle card-body__subtitle--default">
          Сказочное заморское яство
        </p>
        <p className="card-body__subtitle card-body__subtitle--question">
          Котэ не одобряет?
        </p>
        <span className="card-body__scaffold" />
      </label>
      <div
        className={classNames(
          "card-footer",
          isChecked && "card-footer--checked",
          isDisabled && "card-footer--disabled"
        )}
      >
        {!isChecked && !isDisabled && (
          <p>
            Чего сидишь? Порадуй котэ,&nbsp;
            <label className="card-footer__label" htmlFor="foiegras">
              купи.
            </label>
          </p>
        )}
        {isChecked && <p>Печень утки разварная с артишоками.</p>}
        {isDisabled && <p>Печалька, с фуа-гра закончился.</p>}
      </div>
    </div>
  );
};
