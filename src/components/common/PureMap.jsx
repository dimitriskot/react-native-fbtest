import React from "react";
import { withHandlers, compose, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"

const PureMap = compose(
	lifecycle({
		componentDidMount() {
			// this.props.getRef(this)
			// this.props.getRoute();
			// const DirectionsService = new google.maps.DirectionsService();
			// const markers = this.props.points.map(({ position, draggable }) => (
			// 	new google.maps.Marker({
			// 		position,
			// 		draggable
			// 	})
			// ));
			// const waypts = markers.map(({ position }) => (
			// 	{
			// 		location: position,
			// 		stopover: true
			// 	}
			// ));
			// console.log(DirectionsService)

			// DirectionsService.route({
			// 	origin: markers[0].position,
			// 	destination: markers[markers.length - 1].position,
			// 	waypoints: waypts,
			// 	optimizeWaypoints: false,
			// 	// travelMode: 'WALKING',
			// 	travelMode: google.maps.TravelMode.WALKING,
			// }, (result, status) => {
			// 	if (status === google.maps.DirectionsStatus.OK) {
			// 		this.setState({
			// 			directions: result,
			// 		});
			// 	} else {
			// 		console.error(`error fetching directions ${result}`);
			// 	}
			// });
			// console.log(DirectionsService)
		}
	})
)((props) => {
	// const {
	// 	zoom,
	// 	isMarkerShown,
	// 	center,
	// 	directions,
	// 	// getMapRef,
	// 	getMapCenter,
	// 	markers,
	// 	onDragEnd
	// } = props;

	// const markerList = markers.map((marker, i) => (
	// 	<Marker position={marker.position} key={i} />
	// ));

	// console.log(GoogleMap);

	return (
		<GoogleMap
		// ref={getMapRef}
		// defaultZoom={zoom}
		// defaultCenter={center}
		// onCenterChanged={getMapCenter}
		// options={{ draggable: true }}
		// onDragEnd={onDragEnd}
		>
			{/* {markerList.length < 2
				? markerList
				: <DirectionsRenderer directions={directions} />} */}
			{/* {directions && <DirectionsRenderer directions={directions} options={{
				suppressMarkers: true,
				preserveViewport: true,
				markerOptions: {
					visible: true
				}
			}} />} */}
		</GoogleMap>
	)
});

export default withGoogleMap(PureMap);