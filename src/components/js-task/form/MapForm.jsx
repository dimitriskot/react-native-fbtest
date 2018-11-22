import React from "react";
import * as classNames from "classnames";
import PropTypes from 'prop-types';
import { arrayMove } from 'react-sortable-hoc';
import PointList from "./PointList";

class MapForm extends React.Component {

	onSortEnd = ({ oldIndex, newIndex }) => {
		const newPoints = arrayMove(this.props.points, oldIndex, newIndex);
		this.props.changePointsOrder(newPoints);
	};

	onSortStart = (sort, event) => {
		console.log(`sort `, sort);
		console.log(`event `, event);
	};

	render() {
		const {
			value,
			onValueChange,
			onCreateButtonClick,
			onDeleteButtonClick,
			onEnterDown,
			points,
			onSortEnd
		} = this.props;

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
				<PointList points={points} onDeleteButtonClick={onDeleteButtonClick} onSortEnd={this.onSortEnd}
					onSortStart={this.onSortStart} />
			</div>
		);
	}
};

MapForm.propTypes = {
	changeOrder: PropTypes.func,
	places: PropTypes.object,
	placesOrder: PropTypes.array,
};

export default MapForm;