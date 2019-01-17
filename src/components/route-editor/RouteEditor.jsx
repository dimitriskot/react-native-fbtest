import React from "react";
import BackButton from "../common/BackButton";
import MapEditor from "./MapEditor";

const RouteEditor = () => {
  return (
    <div className={"route-editor"}>
      <BackButton />
      <div className={"route-editor__content"}>
        <MapEditor />
      </div>
    </div>
  );
};

export default RouteEditor;
