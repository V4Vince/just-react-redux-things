import React from 'react';

export default (props) => {
  return(
    <li>
      <h5>{props.i+1}: {props.item.title}</h5>
    </li>
  );
}
