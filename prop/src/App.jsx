import './App.css';
import Student from './components/student';
import Nav from './components/Nav';
import imgBlack from './image/black.png';

function Header(props) {
  console.log('props', props.title);
  return (
    <header>
      <h1>
        <a href='/'>{props.title}</a>
      </h1>
    </header>
  );
}
// function Nav(props) {
//   const lis = [];
//   for (let i = 0; i < props.topics.length; i++) {
//     let t = props.topics[i];
//     lis.push(
//       <li key={t.id}>
//         <a href={'/read/' + t.id}>{t.title}</a>
//       </li>
//     );
//   }
//   return (
//     <nav>
//       <ol>{lis}</ol>
//     </nav>
//   );
// }
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
      <Header title='WEB'></Header>
      <Nav topics={topics}></Nav>
      <Article title='Welcome' body='Hello, Web'></Article>
      <Student name='홍길동' age={20} year={4} address='서울'></Student>
      {/* 이미지 경로 import 해서 사용 */}
      <img src={imgBlack} alt='black' width='100' height='100' />
      <br />
      {/* public 하위의 이미지 폴더 생성 경로로 이동 */}
      <img src='/assets/apple.png' />
    </div>
  );
}
export default App;
