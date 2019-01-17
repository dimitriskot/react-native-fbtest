import React from "react";
import MediaQuery from "react-responsive";
import classNames from "classnames";
import MapForm from "./form/MapForm";
import MapComponent from "./map/MapComponent";

export default class MapEditor extends React.Component {
  ENTER_KEY = "Enter";

  constructor(props) {
    super(props);

    this.state = {
      value: "",
      points: [],
      center: {
        lat: 55.734168,
        lng: 37.623938
      },
      directions: null,
      zoom: 16,
      isRouteListOpen: false
    };
  }

  changePointsOrder = (points) => {
    this.setState({ points }, () => this.getRoute());
  };

  getMap = (map) => {
    this.map = map;
  };

  getMapCenter = () => {
    return this.map.getCenter();
  };

  handleValueChange = (e) => {
    const value = e.currentTarget.value;
    this.setState({ value });
  };

  createPoint = () => {
    const { value } = this.state;
    return {
      id: `_${Math.random()
        .toString(36)
        .substr(2, 9)}`,
      title: value,
      position: this.getMapCenter(),
      draggable: true,
      handleDragEnd: (index, marker) => this.handleMarkerDragEnd(index, marker)
    };
  };

  handleCreateButtonClick = () => {
    const { points } = this.state;
    const point = this.createPoint();
    points.push(point);
    const value = "";
    this.setState({ value, points }, () => this.getRoute());
  };

  handleDeleteButtonClick = (id) => {
    const { points } = this.state;
    const index = points.findIndex((point) => point.id === id);
    points.splice(index, 1);
    const isPoints = points.length > 0;
    this.setState({ points }, () => {
      isPoints && this.getRoute();
    });
  };

  handleEnterPress = (e) => {
    const { value } = this.state;
    if (e.key !== this.ENTER_KEY || !value) {
      return;
    }
    this.handleCreateButtonClick();
  };

  handleMarkerDragEnd = (id, { latLng }) => {
    let { points } = this.state;
    const position = latLng;
    points = points.map((point) => (point.id === id ? { ...point, position } : point));
    this.setState({ points }, () => this.getRoute());
  };

  getRoute = () => {
    const { points } = this.state;
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
          this.setState({
            directions: result
          });
        } else {
          console.error(`Directions request failed due to ${result}`);
        }
      },
    );
  };

  toggleMapForm = (e) => {
    e.preventDefault();
    const { isRouteListOpen } = this.state;
    this.setState({ isRouteListOpen: !isRouteListOpen });
  }

  render() {
    const { value, points, zoom, center, directions, isRouteListOpen } = this.state;

    return (
      <div className={"map-editor"}>
        <MediaQuery maxWidth={768}>
          <button
            className={classNames(
              "map-editor__button",
              isRouteListOpen && "map-editor__button--close"
            )}
            onClick={this.toggleMapForm}
          >
            {isRouteListOpen ? "Закрыть" : "Маршрут"}
          </button>
          {isRouteListOpen && (
            <MapForm
              value={value}
              onValueChange={this.handleValueChange}
              onCreateButtonClick={this.handleCreateButtonClick}
              onDeleteButtonClick={this.handleDeleteButtonClick}
              onEnterDown={this.handleEnterPress}
              points={points}
              changePointsOrder={this.changePointsOrder}
            />
          )}
        </MediaQuery>
        <MediaQuery minWidth={769}>
          <MapForm
            value={value}
            onValueChange={this.handleValueChange}
            onCreateButtonClick={this.handleCreateButtonClick}
            onDeleteButtonClick={this.handleDeleteButtonClick}
            onEnterDown={this.handleEnterPress}
            points={points}
            changePointsOrder={this.changePointsOrder}
          />
        </MediaQuery>
        <MapComponent
          zoom={zoom}
          center={center}
          markers={points}
          directions={directions}
          getMapRef={this.getMap}
          getMapCenter={this.getMapCenter}
        />
      </div>
    );
  }
}
