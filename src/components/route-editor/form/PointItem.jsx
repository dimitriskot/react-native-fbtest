import React from "react";
import PropTypes from "prop-types";
import { SortableElement } from "react-sortable-hoc";

const PointItem = (props) => {
  const { point, onDeleteButtonClick } = props;

  return (
    <li className={"map-form__list-item"}>
      <p className={"map-form__list-item__text"}>{point.title}</p>
      <button
        onClick={onDeleteButtonClick}
        className={"map-form__list-item__button"}
      />
    </li>
  );
};

// PointItem.propTypes = {
//   point: PropTypes.object,
//   onDeleteButtonClick: PropTypes.func
// };

export default SortableElement(PointItem);
