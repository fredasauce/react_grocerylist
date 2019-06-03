import React from "react";

const Grocery = (props) => (
  <li
    style={ props.complete ? {...styles.grocery, ...styles.complete } : styles.grocery }
    onClick={() => props.todoClick(props.id)}
  >
    { props.name }
  </li>
)

const styles = {
  grocery: { cursor: "pointer", },
  complete: { color: "grey", textDecoration: "line-through", },
}

export default Grocery;