import React from "react";
import PropTypes from "prop-types";
import { arrayMove } from "react-sortable-hoc";
import PointList from "./PointList";

class MapForm extends React.Component {
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { points, changePointsOrder } = this.props;
    const newPoints = arrayMove(points, oldIndex, newIndex);
    changePointsOrder(newPoints);
  };

  render() {
    const {
      value,
      onValueChange,
      onCreateButtonClick,
      onDeleteButtonClick,
      onEnterDown,
      points
    } = this.props;

    return (
      <div className={"map-form"}>
        <div className={"map-form__header"}>
          <p className={"map-form__header-text"}>Создать точку маршрута:</p>
          <input
            className={"map-form__header-input"}
            type={"text"}
            name={"point"}
            value={value}
            onChange={onValueChange}
            onKeyDown={onEnterDown}
            maxLength={50}
            autoComplete={"off"}
            required
          />
          <button
            className={"map-form__header-button"}
            onClick={onCreateButtonClick}
            disabled={!value}
          >
            Создать
          </button>
        </div>
        <PointList
          points={points}
          onDeleteButtonClick={onDeleteButtonClick}
          onSortEnd={this.onSortEnd}
        />
      </div>
    );
  }
}

MapForm.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  onCreateButtonClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func,
  onEnterDown: PropTypes.func,
  changePointsOrder: PropTypes.func,
  points: PropTypes.array
};

export default MapForm;
