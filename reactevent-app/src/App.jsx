import './App.css';
function Header(props) {
  // console.log('props', props.title);
  return (
    <header>
      {/* a태그에 click 이벤트 추가
      리액트 태그에 이벤트 핸들러 연결되면 콜백함수가 호출됨
      event 객체를 첫번째 파라미터로 주입 */}
      <h1>
        <a
          href='/'
          onClick={(event) => {
            event.preventDefault(); // 기본 동작 방지
            props.onChangeMode(); // 부모 컴포넌트의 함수 호출
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={'/read/' + t.id}
          onClick={(event) => {
            event.preventDefault(); // 기본 동작 방지
            props.onChangeMode(event.target.id);
            props.onChangeMode(t.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  return (
    <div className='App'>
      {/* onChangeMode라는 속성의 값으로 함수를 전달 */}
      <Header
        title='WEB'
        onChangeMode={() => {
          alert('Header');
        }}
      ></Header>
      {/* 속성 value 함수 전달 시 익명함수, 화살표 함수 모두 사용 가능 */}
      <Header
        title='REACT'
        onChangeMode={() => {
          alert('REACT');
        }}
      ></Header>
      {/* 표현되는 목록에서 클릭된 목록에 따라 아이디가 alert로 출력 */}
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          alert(id);
        }}
      ></Nav>
      <Article title='Welcome' body='Hello, Web'></Article>
    </div>
  );
}
export default App;
