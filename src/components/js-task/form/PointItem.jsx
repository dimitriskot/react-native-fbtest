import React from "react";
import PropTypes from "prop-types";
import { SortableElement } from "react-sortable-hoc";

const PointItem = props => {
  const { point, onDeleteButtonClick } = props;
  return (
    <li className={"map-form__list-item"}>
      {point.title}
      <button onClick={onDeleteButtonClick}>Удалить</button>
    </li>
  );
};

PointItem.propTypes = {
  point: PropTypes.object,
  onDeleteButtonClick: PropTypes.func
};

export default SortableElement(PointItem);
