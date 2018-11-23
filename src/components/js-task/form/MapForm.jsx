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

  onSortStart = (sort, event) => {
    console.log("sort ", sort);
    console.log("event ", event);
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
        <p className={"map-form__text"}>Создать точку маршрута:</p>
        <input
          type={"text"}
          name={"point"}
          value={value}
          onChange={onValueChange}
          onKeyDown={onEnterDown}
          maxLength={21}
          required
        />
        <button onClick={onCreateButtonClick} disabled={!value}>
          Создать
        </button>
        <PointList
          points={points}
          onDeleteButtonClick={onDeleteButtonClick}
          onSortEnd={this.onSortEnd}
          onSortStart={this.onSortStart}
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
