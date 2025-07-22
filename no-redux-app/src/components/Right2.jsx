import Right3 from './RIght3';

const Right2 = (props) => {
  return (
    <div>
      <h3>Right2</h3>
      <Right3
        onCountAdd={props.onCountAdd}
        onCountSub={props.onCountSub}
      ></Right3>
    </div>
  );
};

export default Right2;
