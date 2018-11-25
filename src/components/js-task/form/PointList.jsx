import React from "react";
import PropTypes from "prop-types";
import { SortableContainer } from "react-sortable-hoc";
import PointItem from "./PointItem";

const PointList = (props) => {
  const { points, onDeleteButtonClick } = props;
  return (
    <ul className={"map-form__list"}>
      {points.map((point, i) => (
        <PointItem
          key={point.id}
          point={point}
          index={i}
          onDeleteButtonClick={onDeleteButtonClick.bind(this, point.id)}
        />
      ))}
    </ul>
  );
};

PointList.propTypes = {
  points: PropTypes.array,
  onDeleteButtonClick: PropTypes.func
};

export default SortableContainer(PointList);
