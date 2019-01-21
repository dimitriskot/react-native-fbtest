import { connect } from "react-redux";
import routeEditorActions from "../../store/actions/route-editor";
import MapEditorComponent from "../../components/route-editor/MapEditor";

const mapStateToProps = (state) => {
  return { map: state.routeEditor.map };
};

const MapContainer = connect(
  mapStateToProps,
  routeEditorActions
)(MapEditorComponent);

export default MapContainer;
