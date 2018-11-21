import React from "react";
import MapForm from "./MapForm";
import Map from "./Map";
import PureMap from "../common/PureMap";

export default class MapEditor extends React.Component {

	ENTER_KEY = "Enter";

	constructor(props) {
		super(props)

		this.state = {
			value: "",
			points: [],
			markers: [],
			center: {
				lat: 55.734168,
				lng: 37.623938
			},
			directions: null,
			zoom: 16,
			isMarkerShown: true
		}
	}

	componentDidMount() {
		this.getMap();
		this.getDirections();
	}

	render() {
		const {
			value,
			points,
			markers,
			zoom,
			isMarkerShown,
			center,
			directions
		} = this.state;

		return (
			<div className="map-editor outline-3">
				<MapForm
					value={value}
					onValueChange={this.handleValueChange}
					onCreateButtonClick={this.handleCreateButtonClick}
					onDeleteButtonClick={this.handleDeleteButtonClick}
					onEnterDown={this.handleEnterPress}
					points={points}
				/>
				<PureMap
					// map={this.map}
					// isMarkerShown={isMarkerShown}
					// getMapRef={this.getMapRef}
					// getMapCenter={this.getMapCenter}
					// isMarkerShown={isMarkerShown}
					// zoom={zoom}
					// center={center}
					// onMarkerClick={this.handleMarkerClick}
					// // getRoute={this.getRoute}
					// markers={markers}
					// directions={directions}
					{...this.getMapProps()}
				/>
			</div>
		);
	}

	// onDragEnd = () => {
	// 	this.getRoute();
	// }

	getMapProps = () => {
		return {
			// googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDM_DVnbVRiQLfPIOwyDFbwg5X_HIG62_Y",
			// loadingElement: <div style={{ height: `100%` }} />,
			containerElement: <div id={"map-1"} style={{ width: `70%`, height: `600px` }} />,
			mapElement: <div id={"map-2"} style={{ height: `100%` }} />
		}
	}

	getMapRef = (map) => {
		this.map = map;
		console.log(this.map);
	}

	getMap = () => {
		const {
			zoom,
			center
		} = this.state;
		var mapOpt = {
			zoom,
			center
		};
		this.map = new google.maps.Map(document.getElementById('map-2'), mapOpt);
	}

	getDirections = () => {
		this.service = new google.maps.DirectionsService;
		this.display = new google.maps.DirectionsRenderer;
		this.display.setMap(this.map);
		this.display.setOptions({
			suppressMarkers: true,
			preserveViewport: true
		});
	}

	getMapCenter = () => {
		return this.map.getCenter();
	}

	handleValueChange = (e) => {
		const value = e.currentTarget.value;
		this.setState({ value });
	}

	handleCreateButtonClick = () => {
		const points = this.state.points;
		const id = '_' + Math.random().toString(36).substr(2, 9);
		const point = {
			title: this.state.value,
			id
		}
		points.push(point);
		const value = "";
		this.setState({ value, points }, () => this.createMarker());
	}

	handleDeleteButtonClick = (id) => {
		let points = this.state.points;
		const index = points.findIndex((point) => point.id === id);
		points.splice(index, 1);
		this.setState({ points });
	}

	handleEnterPress = (e) => {
		if (e.key !== this.ENTER_KEY) {
			return;
		}
		this.handleCreateButtonClick();
	}

	createMarker = () => {
		const markers = [...this.state.markers];
		const position = this.getMapCenter();
		const marker = new google.maps.Marker({
			position,
			map: this.map,
			draggable: true
		});
		marker.addListener('dragend', () => this.getRoute(this.service, this.display));
		markers.push(marker)
		const isRoute = markers.length > 1;
		// this.setState({ markers }, () => { isRoute && this.getRoute() });
		this.setState({ markers }, () => this.getRoute(this.service, this.display));
	}

	getRoute = (service, display) => {
		const { markers } = this.state;
		const waypts = markers.map(({ position }) => (
			{
				location: position,
				stopover: true
			}
		));

		console.log(waypts[0].location);
		console.log(waypts[waypts.length - 1].location);

		// const origin = waypts.shift().location;
		// const destination = waypts.pop().location;

		const origin = markers[0].position;
		const destination = markers[markers.length - 1].position;

		service.route({
			origin,
			destination,
			waypoints: waypts,
			optimizeWaypoints: false,
			travelMode: 'WALKING',
			// travelMode: google.maps.TravelMode.WALKING,
		}, (result, status) => {
			if (status === google.maps.DirectionsStatus.OK) {
				console.log(result);
				display.setDirections(result);
				// this.setState({
				// 	directions: result,
				// });
			} else {
				console.error(`error fetching directions ${result}`);
			}
		});
	}
}
