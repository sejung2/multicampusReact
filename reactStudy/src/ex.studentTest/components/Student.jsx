export default function Student(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.age} age</p>
      <p>{props.year} year</p>
      <p>{props.address} address</p>
    </div>
  );
}
