import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const PointItem = (props) => {
	const { point, onDeleteButtonClick } = props;
	return (
		<li className="map-form__list-item">
			{point.title}
			<button onClick={onDeleteButtonClick}>
				Удалить
			</button>
		</li>
	);
};

export default SortableElement(PointItem);