import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import PointItem from "./PointItem";

const PointList = (props) => {
	const { points, onDeleteButtonClick } = props;
	return (
		<ul className="map-form__list outline-1" >
			{points.map((point, i) => (
				<PointItem key={point.id} point={point} index={i} onDeleteButtonClick={onDeleteButtonClick.bind(this, point.id)} />
			))}
		</ul>
	)
};

export default SortableContainer(PointList);