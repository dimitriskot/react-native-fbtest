import React from "react";
import * as classNames from "classnames";

export const Product = props => {
	const { product, handleChange, handleMouseLeave } = props;
	// console.log(product);

	return (
		<div className="product">
			<input
				className="product-input visually-hidden"
				type="checkbox"
				name="food"
				id={product.id}
				value={product.isChecked}
				onChange={handleChange}
			/>
			<label
				className={classNames(
					"product-body",
					product.isChecked && "product-body--checked",
					product.isDefaultChecked && "product-body--hover"
				)}
				htmlFor={product.id}
				onMouseLeave={handleMouseLeave}
			>
				<p className="product-body__subtitle product-body__subtitle--default">
					Сказочное заморское яство
        </p>
				<p className="product-body__subtitle product-body__subtitle--question">
					Котэ не одобряет?
        </p>
				<h1>{product.type}</h1>
				<span className="product-body__scaffold" />
			</label>
			{/* <div
				className={classNames(
					"product-footer",
					product.isChecked && "product-footer--checked",
					product.isDisabled && "product-footer--disabled"
				)}
			>
				{!product.isChecked && !product.isDisabled && (
					<p>
						Чего сидишь? Порадуй котэ,&nbsp;
            <label className="product-footer__label" htmlFor={product.id}>
							купи.
            </label>
					</p>
				)}
				{product.isChecked && <p>Печень утки разварная с артишоками.</p>}
				{product.isDisabled && <p>Печалька, с фуа-гра закончился.</p>}
			</div> */}
		</div>
	);
};
