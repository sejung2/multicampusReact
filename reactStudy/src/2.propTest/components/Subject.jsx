export default function Subject(props) {
  //선택자에서 전달된 속성값을 매개변수 1개로 받으면 object 형태로 전달됨

  return (
    <div>
      <h1>{props.title}</h1>
      {props.sub}
      <br />
      {props.content}
      <br />
    </div>
  );
}

// Subject.defaultProps = {
//   title: 'web',
// }; 클래스형에서는 아님
