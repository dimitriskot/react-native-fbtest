import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<Link to={"/Html_task"} className="main__link">
					HTML/CSS - разработчик
        </Link>
				<Link to={"/Js_task"} className="main__link">
					JS - разработчик
        </Link>
			</div>
		);
	}
}

export default withRouter(Main);