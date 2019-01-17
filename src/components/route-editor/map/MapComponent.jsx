import React from "react";
import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from "react-google-maps";

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_DVnbVRiQLfPIOwyDFbwg5X_HIG62_Y",
    loadingElement: <div className={"loadingElement"} style={{ height: "100%" }} />,
    containerElement: <div className={"containerElement"} />,
    mapElement: <div className={"mapElement"} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const {
    zoom,
    center,
    markers,
    directions,
    getMapRef,
    getMapCenter
  } = props;

  const markerList = markers.map(({ id, position, draggable, handleDragEnd }) => (
    <Marker
      key={id}
      position={position}
      draggable={draggable}
      onDragEnd={handleDragEnd.bind(this, id)}
    />
  ));

  return (
    <GoogleMap
      ref={getMapRef}
      defaultZoom={zoom}
      defaultCenter={center}
      onCenterChanged={getMapCenter}
    >
      {markerList}
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            suppressMarkers: true,
            preserveViewport: true
          }}
        />
      )}
    </GoogleMap>
  );
});

MapComponent.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.object,
  directions: PropTypes.object,
  getMapRef: PropTypes.func,
  getMapCenter: PropTypes.func,
  markers: PropTypes.array,
  onDragEnd: PropTypes.func
};

export default MapComponent;
