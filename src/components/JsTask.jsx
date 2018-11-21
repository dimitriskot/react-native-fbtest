import React from "react";
import { BackButton } from "./common/BackButton";
import MapEditor from "./js-task/MapEditor";

export default class JsTask extends React.Component {
	render() {
		return (
			<div className="js-task outline-1">
				<BackButton />
				<div className="js-task__content outline-2">
					<MapEditor />
				</div>
			</div>
		);
	}
}
