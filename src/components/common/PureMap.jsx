import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"

const PureMap = (props) => {
	const {
		zoom,
		isMarkerShown,
		center,
		directions,
		getMapRef,
		getMapCenter,
		markers,
		onDragEnd
	} = props;

	const markerList = markers.map((marker, i) => (
		<Marker
			key={i}
			position={marker.position}
			draggable={marker.draggable}
			onDragEnd={marker.handleDragEnd.bind(this, i)}
		/>
	));

	return (
		<GoogleMap
			ref={getMapRef}
			defaultZoom={zoom}
			defaultCenter={center}
			onCenterChanged={getMapCenter}
			options={{ draggable: true }}
			onDragEnd={onDragEnd}
		>
			{markerList}
			{directions && <DirectionsRenderer directions={directions} options={{
				suppressMarkers: true,
				preserveViewport: true
			}} />}
		</GoogleMap>
	)
};

export default withScriptjs(withGoogleMap(PureMap));