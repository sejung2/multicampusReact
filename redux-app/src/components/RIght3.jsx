import React from 'react';

const Right3 = (props) => {
  return (
    <div>
      <h3>Right3</h3>
      <button onClick={props.onCountSub}>-</button> &nbsp; &nbsp;
      <button onClick={props.onCountAdd}>+</button>
    </div>
  );
};

export default Right3;
