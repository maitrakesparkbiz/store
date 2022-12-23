import React from "react";
import { Link } from "react-router-dom";
const product = (props:any) => {
  return (
    <tr onClick={() => props.click(props.data.id)}>
      <td>
        {props.data.title}
      </td>
      <td>{props.data.price}</td>
      <td>
        <img src={props.data.image} width="100px"></img>
      </td>
    </tr>
  );
};

export default product;
