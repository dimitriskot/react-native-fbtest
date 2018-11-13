import React from "react";
import { Link } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main outline-1">
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
