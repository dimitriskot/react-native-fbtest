import React from "react";
import * as classNames from "classnames";
import { SortableElement } from 'react-sortable-hoc';

const MapForm = props => {
	const {
		value,
		onValueChange,
		onCreateButtonClick,
		onDeleteButtonClick,
		onEnterDown,
		points,
		onListDragStart,
		onPointDragOver,
		onListDragEnd
	} = props;

	const pointList = points.map((point, i) => (
		<li
			key={point.id}
			data-index={i}
			className="map-form__list-item"
			draggable={true}
			// onDragOver={onPointDragOver.bind(this)}
			onDragOver={onPointDragOver.bind(this)}
			onDragEnd={onListDragEnd.bind(this)}
			onDragStartCapture={onListDragStart.bind(this)}
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
			<ul
				className="map-form__list outline-1"
			// onDragStartCapture={onListDragStart}
			// onDragOver={onPointDragOver}
			// onDragEnd={onListDragEnd}
			>
				{pointList}
			</ul>
		</div>
	);
};

export default MapForm;