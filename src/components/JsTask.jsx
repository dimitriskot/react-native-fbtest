import React from "react";
import BackButton from "./common/BackButton";
import MapEditor from "./js-task/MapEditor";

const JsTask = () => {
  return (
    <div className={"js-task"}>
      <BackButton />
      <div className={"js-task__content"}>
        <MapEditor />
      </div>
    </div>
  );
};

export default JsTask;
