import React from 'react'
import { Link } from "react-router-dom";

import $ from "jquery";

function PhoneLink(props) {
  const { ListNameClass, Url, ListName } = props;

  // *****************************//
  // Phone Header Nav Script Start here
  // *****************************//

  const hide = () => {
    $(".view").toggleHide();
  };

  // *****************************//
  // Phone Header Script End here
  // *****************************//

  return (
    <li className={ListNameClass}>
      <Link className='view' onClick={hide} to={Url}>{ListName}</Link>
    </li >
  );
}

export default PhoneLink;