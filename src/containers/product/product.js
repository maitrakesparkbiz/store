import React from "react";
import { Link } from "react-router-dom";
const product = (props) => {
  return (
    <tr onClick={props.click}>
      <td>
        <Link to={"/view/" + props.id}>{props.data.title}</Link>
      </td>
      <td>{props.data.price}</td>
      <td>
        <img src={props.data.image} width="100px"></img>
      </td>
    </tr>
  );
};

export default product;
