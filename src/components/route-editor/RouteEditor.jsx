import React from "react";
import MediaQuery from "react-responsive";
import classNames from "classnames";
import BackButton from "../common/BackButton";
import MapForm from "../../containers/route-editor/Form";
import MapComponent from "../../containers/route-editor/Map";

export default class RouteEditor extends React.Component {

  state = { isRouteListOpen: false };

  toggleMapForm = (e) => {
    e.preventDefault();
    const { isRouteListOpen } = this.state;
    this.setState({ isRouteListOpen: !isRouteListOpen });
  }

  render() {
    const { isRouteListOpen } = this.state;

    return (
      <div className={"route-editor"}>
        <BackButton />
        <div className={"route-editor__content"}>
          <MediaQuery maxWidth={768}>
            <button
              className={classNames("tab-button", isRouteListOpen && "tab-button--close")}
              onClick={this.toggleMapForm}
            >
              {isRouteListOpen ? "Закрыть" : "Маршрут"}
            </button>
            {isRouteListOpen && (<MapForm />)}
          </MediaQuery>
          <MediaQuery minWidth={769}>
            <MapForm />
          </MediaQuery>
          <MapComponent />
        </div>
      </div>
    );
  }

}
