import React from "react";
import { BackButton } from "./common/BackButton";
import ProductList from "./html-task/ProductList";

export default class HtmlTask extends React.Component {
	render() {
		return (
			<div className="html-task">
				<BackButton />
				<h1 className="html-task__title">Ты сегодня покормил кота?</h1>
				<div className="html-task__content">
					<ProductList />
				</div>
			</div>
		);
	}
}
