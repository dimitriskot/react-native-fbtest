import React from "react";
import { withRouter, Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={"main"}>
      <Link to={"/market"} className={"main__link"}>
        HTML/CSS - разработчик
      </Link>
      <Link to={"/route-editor"} className={"main__link"}>
        JS - разработчик
      </Link>
    </div>
  );
};

export default withRouter(Main);
