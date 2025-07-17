export default function Student(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Year: {props.year}</p>
      <p>Address: {props.address}</p>
    </div>
  );
}
