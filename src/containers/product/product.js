import React from "react";

const product = (props) => {
  return (
    <tr>
      <td>{props.data.title}</td>
      <td>{props.data.price}</td>
      <td>
        <img src={props.data.image} width="100px"></img>
      </td>
    </tr>
  );
};

export default product;
