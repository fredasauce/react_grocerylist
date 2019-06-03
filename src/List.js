import React from "react";
import Grocery from "./Grocery";

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      { props.items.map( item => <Grocery key={item.id} {...item} todoClick={props.todoClick} /> )}
    </ul>
  </div>
);

export default List;