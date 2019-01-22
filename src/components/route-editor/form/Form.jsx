import React from "react";
import PropTypes from "prop-types";
import PointList from "./PointList";

const MapFormComponent = (props) => {
  const {
    points,
    value,
    handleValueChange,
    handleEnterPress,
    handleCreateButtonClick,
    handleDeleteButtonClick,
    handleSortEnd
  } = props;

  return (
    <div className={"map-form"}>
      <div className={"map-form__header"}>
        <p className={"map-form__header-text"}>Создать точку маршрута:</p>
        <input
          className={"map-form__header-input"}
          type={"text"}
          name={"point"}
          value={value}
          onChange={handleValueChange}
          onKeyDown={handleEnterPress}
          maxLength={50}
          autoComplete={"off"}
          required
        />
        <button
          className={"map-form__header-button"}
          onClick={handleCreateButtonClick}
          disabled={!value}
        >
            Создать
        </button>
      </div>
      <PointList
        points={points}
        onDeleteButtonClick={handleDeleteButtonClick}
        onSortEnd={handleSortEnd}
      />
    </div>
  );

};

MapFormComponent.propTypes = {
  points: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired,
  handleCreateButtonClick: PropTypes.func.isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
  handleSortEnd: PropTypes.func.isRequired
};

export default MapFormComponent;
