import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { arrayMove } from "react-sortable-hoc";
import routeEditorActions from "../../store/actions/route-editor";
import { randomId } from "../../utils";
import store from "../../store";
import MapFormComponent from "../../components/route-editor/form/Form";

class MapFormContainer extends React.Component {

  ENTER_KEY = "Enter";

  state = { value: "" }

  handleValueChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({ value });
  };

  handleCreateButtonClick = () => {
    const { addPoint } = this.props;
    const point = this.generatePoint();
    addPoint({ point });
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
    deletePoint({ id });
    this.getRoute();
  };

  handleSortEnd = ({ oldIndex, newIndex }) => {
    const { map: { points }, changePointsOrder } = this.props;
    const newPoints = arrayMove(points, oldIndex, newIndex);
    changePointsOrder({ newPoints });
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

  handleMarkerDragEnd = (id, { latLng }) => {
    const { changePointPosition } = this.props;
    changePointPosition({ id, latLng });
    this.getRoute();
  };

  getRoute = () => {
    const { getDirections } = this.props;
    const { routeEditor: { points } } = store.getState();
    const isPoints = points.length > 0;
    if (isPoints) {
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
        (directions, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            getDirections({ directions });
          } else {
            console.error(`Directions request failed due to ${directions}`);
          }
        },
      );
    }
  };

  render() {
    const { value } = this.state;
    const { map: { points } } = this.props;

    return (
      <MapFormComponent
        value={value}
        points={points}
        handleValueChange={this.handleValueChange}
        handleEnterPress={this.handleEnterPress}
        handleCreateButtonClick={this.handleCreateButtonClick}
        handleDeleteButtonClick={this.handleDeleteButtonClick}
        handleSortEnd={this.handleSortEnd}
      />
    );
  }

}

MapFormContainer.propTypes = {
  map: PropTypes.shape({
    center: PropTypes.object.isRequired,
    points: PropTypes.array.isRequired
  }).isRequired,
  addPoint: PropTypes.func.isRequired,
  deletePoint: PropTypes.func.isRequired,
  getDirections: PropTypes.func.isRequired,
  changePointPosition: PropTypes.func.isRequired,
  changePointsOrder: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return { map: state.routeEditor };
};

const MapForm = connect(
  mapStateToProps,
  routeEditorActions
)(MapFormContainer);

export default MapForm;
