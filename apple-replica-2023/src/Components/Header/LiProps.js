import React from 'react'
import { Link } from "react-router-dom";

// import $ from "jquery";

function LiProps(props) {
  const { ListNameClass, Url, ListName } = props;

  return (
    <li className={ListNameClass}>
      <Link to={Url}>{ListName}</Link>
    </li >
  );
}

export default LiProps;

// import React from 'react'
// import { Link } from "react-router-dom";

// import $ from "jquery";

// function LiProps(props) {
//   const { ListNameClass, Url, ListName } = props;

//   // useEffect(() => {
//   //   $(() => {
//   //     return (
//   //       // const toggleMenu = () => {
//   //       $(".handleMenu").slideToggle()
//   //       // }
//   //     )
//   //   });
//   // }, []);

//   const toggleMenu = () => {
//     $(".handleMenu").toggleHide();
//   }

//   return (
//     <li className={ListNameClass}>
//       <Link className='handleMenu' onClick={toggleMenu} to={Url}>{ListName}</Link>
//     </li >
//   );
// }

// export default LiProps;