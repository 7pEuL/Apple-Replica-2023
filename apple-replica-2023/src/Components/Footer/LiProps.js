import React from "react";
import { Link } from "react-router-dom";


function LiProps(props) {
  const { ListNameClass, Url, ListName } = props;
  return (
    <li className={ListNameClass}>
      <Link to={Url}>{ListName}</Link>
    </li>
  );
}

export default LiProps;
