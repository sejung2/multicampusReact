export default function ReactButton(props) {
  const style = {
    // 스타일 객체
    color: 'white',
    backgroundColor: 'blue',
  };
  return (
    <div>
      <button style={style}>{props.children}</button>
    </div>
  );
}
