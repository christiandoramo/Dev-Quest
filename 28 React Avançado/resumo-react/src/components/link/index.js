import React from "react";
import { Link } from "react-router-dom";

export const MeuLink = (props) => {
  return (
    <Link to={props.link}>
      <h2>{props.children}</h2>
    </Link>
  );
};

MeuLink.defaultProps = {
  link: "/posts",
};
