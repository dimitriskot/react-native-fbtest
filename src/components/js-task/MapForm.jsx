import React from "react";
import * as classNames from "classnames";

const MapForm = props => {
	const {
		value,
		onValueChange,
		onCreateButtonClick,
		onDeleteButtonClick,
		onEnterDown,
		points
	} = props;
	const pointList = points.map((point, i) => (
		<li
			key={i}
			className="map-form__list-item"
		>
			{point.title}
			<button onClick={onDeleteButtonClick.bind(this, point.id)}>
				Удалить
			</button>
		</li>
	));
	return (
		<div className="map-form">
			<p className="map-form__text">Создать точку маршрута:</p>
			<input
				type="text"
				name="point"
				value={value}
				onChange={onValueChange}
				onKeyDown={onEnterDown}
				maxLength={21}
				required={true}
			/>
			<button onClick={onCreateButtonClick} disabled={!value}>
				Создать
			</button>
			<ul className="map-form__list">
				{pointList}
			</ul>
		</div>
	);
};

export default MapForm;