import Student from './components/Student';

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
function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a href={'/read/' + t.id}>{t.title}</a>
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
function exApp() {
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
      <Student
        name='John Doe'
        age={20}
        year={2}
        address='123 Main St'
      ></Student>
    </div>
  );
}
export default exApp;
