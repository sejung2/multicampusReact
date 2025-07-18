import './App.css';
import { useState } from 'react';
import Create from './components/Create';

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
            props.onChangeMode(Number(event.target.id));
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

  //topics의 값이 변경되면 화면에 표현된 목록이 변경되어야 함 -> 렌더링 되어야 함
  //state 활용
  const [nextId, setNextId] = useState(4); // 다음 id를 관리하기 위한 상태
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ]);
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, Web'></Article>;
  } else if (mode === 'READ') {
    // 게시 목록을 클릭하면 변화되는 코드
    let title,
      body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  } else if (mode === 'CREATE') {
    // create 메뉴 클릭하면 입력창을 표현(component 이용)
    // Create 컴포넌트의 create 버튼을 클릭해서 submit 이벤트가 발생하면 props로 전달된 함수가 실행이 되도록
    // 함수 내용은 입력된 title과 body를 topics 배열에 추가
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = {
            id: nextId,
            title: _title,
            body: _body,
          }; // submit 이벤트가 발생시 전달되는 인수 (사용자 정의 객체로 구성)
          const newTopics = [...topics]; // state value 객체배열 복사 -> 원본 보존
          newTopics.push(newTopic); // 복사본에 새로 입력된 객체 추가
          setTopics(newTopics); // setTopics로 복사본 전달 -> 렌더링
          setMode('READ'); // create 후에 READ 모드로 변경
          setId(nextId); // 다음 id로 변경 -> READ 모드에서 id가
          setNextId(nextId + 1); // 다음 id 증가

          // topics.push(newTopic);
          // setTopics(topics); // 기존 state value객체인 topics와 setTopics가 전달하고 , 값과 비교하여 변경이 있으면 렌더링
          //위 코드는 state가 참조하는 배열을 미리 변경시켜 놓고 변경된 배열을 setTopics로 전달함 setTopics 입장에서는 변화가 없음 -> 렌더링 안됨
          //해결 방법 : state가 참조하는 원본 배열을 복사하여 복사본값을 변경한 후 setTopics로 전달 -> 원본과 복사본의 내용이 다르다면 렌더링 진행
        }}
      ></Create>
    );
  }
  return (
    <div className='App'>
      <Header
        title='WEB'
        onChangeMode={() => {
          setMode('WELCOME');
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}
      ></Nav>
      {content}
      <a
        href='/create'
        onClick={(event) => {
          event.preventDefault();
          setMode('CREATE');
        }}
      >
        Create
      </a>
    </div>
  );
}
export default App;
