import React from "react";
import PropTypes from "prop-types";
import { arrayMove } from "react-sortable-hoc";
import PointList from "./PointList";
import { randomId } from "../../../utils";
import store from "../../../store";

class MapForm extends React.Component {
  ENTER_KEY = "Enter";

  state = { value: "" }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { map: { points } } = this.props;
    const newPoints = arrayMove(points, oldIndex, newIndex);
    this.changePointsOrder(newPoints);
  };

  changePointsOrder = (points) => {
    const { changePointsOrder } = this.props;
    changePointsOrder(points);
    this.getRoute();
  };

  generatePoint = () => {
    const { value } = this.state;
    const { map: { center } } = this.props;
    return {
      id: randomId(),
      title: value,
      position: center,
      draggable: true,
      handleDragEnd: (index, marker) => this.handleMarkerDragEnd(index, marker)
    };
  };

  handleValueChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({ value });
  };

  handleCreateButtonClick = () => {
    const { addPoint } = this.props;
    const point = this.generatePoint();
    addPoint(point);
    const value = "";
    this.setState({ value });
    this.getRoute();
  };

  handleEnterPress = (e) => {
    const { value } = this.state;
    if (e.key !== this.ENTER_KEY || !value) {
      return;
    }
    this.handleCreateButtonClick();
  };

  handleDeleteButtonClick = (id) => {
    const { deletePoint } = this.props;
    deletePoint(id);
    this.getRoute();
  };

  handleMarkerDragEnd = (id, { latLng }) => {
    const { changePointPosition } = this.props;
    changePointPosition({ id, latLng });
    this.getRoute();
  };

  getRoute = () => {
    const { getDirections } = this.props;
    const { routeEditor: { map: { points } } } = store.getState();
    const google = window.google;
    const DirectionsService = new google.maps.DirectionsService();
    const waypoints = points.map(({ position }) => ({
      location: position,
      stopover: true
    }));

    const origin = points[0].position;
    const destination = points[points.length - 1].position;

    DirectionsService.route(
      {
        origin,
        destination,
        waypoints,
        optimizeWaypoints: false,
        travelMode: google.maps.TravelMode.WALKING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          getDirections(result);
        } else {
          console.error(`Directions request failed due to ${result}`);
        }
      },
    );
  };

  render() {
    const { value } = this.state;
    const { map: { points } } = this.props;

    return (
      <div className={"map-form"}>
        <div className={"map-form__header"}>
          <p className={"map-form__header-text"}>Создать точку маршрута:</p>
          <input
            className={"map-form__header-input"}
            type={"text"}
            name={"point"}
            value={value}
            onChange={this.handleValueChange}
            onKeyDown={this.handleEnterPress}
            maxLength={50}
            autoComplete={"off"}
            required
          />
          <button
            className={"map-form__header-button"}
            onClick={this.handleCreateButtonClick}
            disabled={!value}
          >
            Создать
          </button>
        </div>
        <PointList
          points={points}
          onDeleteButtonClick={this.handleDeleteButtonClick}
          onSortEnd={this.onSortEnd}
        />
      </div>
    );
  }
}

MapForm.propTypes = {
  map: PropTypes.shape({
    points: PropTypes.array.isRequired,
    center: PropTypes.object.isRequired
  }).isRequired,
  addPoint: PropTypes.func.isRequired,
  deletePoint: PropTypes.func.isRequired,
  getDirections: PropTypes.func.isRequired,
  changePointPosition: PropTypes.func.isRequired,
  changePointsOrder: PropTypes.func.isRequired
};

export default MapForm;
