import React from 'react';
import Left3 from './Left3';

const Left2 = (props) => {
  return (
    <div>
      <h3>left2</h3>
      <Left3 count={props.count}></Left3>
    </div>
  );
};

export default Left2;
