import React from "react";
import BackButton from "../common/BackButton";
import MapContainer from "../../containers/route-editor/Map";
// import MapEditorComponent from "./MapEditor";

const RouteEditor = () => {
  return (
    <div className={"route-editor"}>
      <BackButton />
      <div className={"route-editor__content"}>
        {/* <MapEditor /> */}
        <MapContainer />
      </div>
    </div>
  );
};

export default RouteEditor;
