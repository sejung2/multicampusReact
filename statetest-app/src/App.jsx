import './App.css';
import { useState } from 'react'; //useState 기능 포함
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href='/'
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
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
            event.preventDefault();
            props.onChangeMode(event.target.id);
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
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, Web'></Article>;
  } else {
    content = (
      <Article
        title={topics[id - 1].title}
        body={topics[id - 1].body}
      ></Article>
    );
  }
  return (
    <div className='App'>
      <Header
        title='WEB'
        onChangeMode={() => {
          setMode('WELCOME'); //state객체 값 변경->컴포넌트 랜더링 다시 진행
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode('READ'); // mode를 READ로 변경
          setId(Number(id));
        }}
      ></Nav>
      {content}
    </div>
  );
}
export default App;
