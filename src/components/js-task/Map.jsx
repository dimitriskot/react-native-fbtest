import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import PureMap from "../common/PureMap";

const points = [
	// {
	// 	position: {
	// 		lat: 55.734168,
	// 		lng: 37.623938
	// 	},
	// 	draggable: true
	// }
	// {
	// 	position: {
	// 		lat: 53.734168,
	// 		lng: 34.623938
	// 	},
	// 	draggable: true
	// },
	// {
	// 	position: {
	// 		lat: 50.734168,
	// 		lng: 31.623938
	// 	},
	// 	draggable: true
	// }
];

class Map extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			directions: null,
			zoom: 16,
			isMarkerShown: false,
			center: {
				lat: 55.734168,
				lng: 37.623938
			},
			markers: [],
			points: []
		}
	}

	componentDidMount() {
		this.delayedShowMarker()
		// this.getRoute();
		// this.createMarker();
	}

	render() {
		const {
			zoom,
			isMarkerShown,
			center,
			directions
		} = this.state;

		return (
			<PureMap
				getMapRef={this.getMapRef}
				getMapCenter={this.getMapCenter}
				isMarkerShown={isMarkerShown}
				zoom={zoom}
				center={center}
				onMarkerClick={this.handleMarkerClick}
				// getRoute={this.getRoute}
				directions={directions}
			// {...this.getMapProps()}
			/>
		)
	}

	getMapCenter = () => {
		console.log(this.map.getCenter().lat());
		// console.log(props.getCenter());
	}

	getMapRef = (props) => {
		// console.log(props.getCenter());
		this.map = props;
		// console.log(this.map.getCenter());
	}

	// getMapProps = () => {
	// 	return {
	// 		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_DVnbVRiQLfPIOwyDFbwg5X_HIG62_Y",
	// 		loadingElement: <div style={{ height: `100%` }} />,
	// 		containerElement: <div style={{ width: `70%`, height: `600px` }} />,
	// 		mapElement: <div style={{ height: `100%` }} />
	// 	}
	// }

	// createMarker = () => {
	// 	setTimeout(() => {
	// 		const { center } = this.state;
	// 		const markers = [];
	// 		markers.push(
	// 			new google.maps.Marker({
	// 				position: center,
	// 				draggable: true
	// 			})
	// 		)
	// 		this.setState({ markers }, () => this.getRoute());
	// 	}, 3000);
	// }

	getMarkers = () => {
		return points.map(({ position, draggable }) => (
			<Marker
				position={position}
				draggable={draggable}
			/>
		));
	}

	getRoute = () => {
		const { markers } = this.state;
		console.log(markers);
		const DirectionsService = new google.maps.DirectionsService();

		const waypts = markers.map(({ position }) => (
			{
				location: position,
				stopover: true
			}
		));
		// console.log(waypts)
		// console.log(markers[0].props.position)
		// console.log(markers[markers.length - 1].props.position)

		DirectionsService.route({
			origin: markers[0].position,
			destination: markers[markers.length - 1].position,
			waypoints: waypts,
			optimizeWaypoints: false,
			// travelMode: 'WALKING',
			travelMode: google.maps.TravelMode.WALKING,
		}, (result, status) => {
			if (status === google.maps.DirectionsStatus.OK) {
				// console.log(result);
				this.setState({
					directions: result,
				});
			} else {
				console.error(`error fetching directions ${result}`);
			}
		});
	}

	delayedShowMarker = () => {
		setTimeout(() => {
			this.setState({ isMarkerShown: true })
		}, 3000)
	}

	handleMarkerClick = () => {
		this.setState({ isMarkerShown: false })
		this.delayedShowMarker()
	}
}

export default withGoogleMap(Map);