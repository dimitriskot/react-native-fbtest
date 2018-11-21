import React from "react";
import * as classNames from "classnames";
import { numberDeclension } from "../../utils";

export const Product = props => {
	const { product, handleChange, handleMouseLeave, handleLabelClick } = props;

	return (
		<div className="product">
			<input
				className="product-input visually-hidden"
				type="checkbox"
				name="food"
				id={product.id}
				checked={product.isChecked}
				onChange={handleChange}
				disabled={product.isDisabled}
			/>
			<label
				className={classNames(
					"product-body",
					product.isDefaultChecked && "product-body--hover"
				)}
				htmlFor={product.id}
				onMouseLeave={handleMouseLeave}
			>
				<span className="product-body__layout" />
				<p className="product-body__subtitle product-body__subtitle--default">
					Сказочное заморское яство
        </p>
				<p className="product-body__subtitle product-body__subtitle--question">
					Котэ не одобряет?
        </p>
				<h1 className="product-body__title">Нямушка</h1>
				<h2 className="product-body__type">{product.type}</h2>
				{!!product.portions && (
					<p className="product-body__consists">
						<span className="product-body__consists-count">{product.portions}&nbsp;</span>
						{numberDeclension(product.portions, ["порция", "порции", "порций"])}
					</p>
				)}
				{!!product.presents.count && (
					<p className="product-body__consists">
						<span className="product-body__consists-count">{product.presents.count}&nbsp;</span>
						{numberDeclension(product.presents.count, ["мышь", "мыши", "мышей"])} в подарок
					</p>
				)}
				{!!product.presents.text && (
					<p className="product-body__consists">
						{product.presents.text}
					</p>
				)}
				<p className="product-body__weight">
					<span className="product-body__weight-count">{product.weight}</span>
					<span className="product-body__weight-measure">кг</span>
				</p>
			</label>
			<div
				className={classNames(
					"product-footer",
					product.isChecked && "product-footer--checked",
					product.isDisabled && "product-footer--disabled"
				)}
			>
				{!product.isChecked && !product.isDisabled && (
					<p>
						Чего сидишь? Порадуй котэ,&nbsp;
            <label className="product-footer__label" htmlFor={product.id} onClick={handleLabelClick}>
							купи.
            </label>
					</p>
				)}
				{product.isChecked && <p>{product.description}</p>}
				{product.isDisabled && <p>Печалька, {product.type} закончился</p>}
			</div>
		</div>
	);
};
