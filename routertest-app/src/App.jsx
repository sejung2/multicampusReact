import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/contact';

var contents = [
  { id: 1, title: 'Politics', description: 'Politics is...' },
  { id: 2, title: 'Economy', description: 'Economy is...' },
  { id: 3, title: 'Society', description: 'Society is...' },
];

function App() {
  return (
    <div>
      <div className='app'>
        <h1>hello React-Router-Dom</h1>
        {/* 렌더링이 진행될 때마다 페이지 새로고침이 발생함
            기존에 추가한 컴포넌트들 모두 사라지고 다시 처음부터 렌더링을 진행함
            페이지 단위 리로드 하지 않으려면 동적으로 갖고오는 코드나 데이터는 비동기 기술을 이용해서 페이지를 만들어야 함
            리액트가 제공하는 Link 컴포넌트를 사용
            애플리케이션 유지한 상태에서 페이지 주소만 변경 가능한 환경을 구성할 수 있음 */}
        {/* <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/topics'>Topics</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul> */}
        {/* 모든 컴포넌트가 순서대로 나열됨 */}
        {/* 리로드가 발생하지 않는 Link 컴포넌트 사용 */}
        {/* <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul> */}
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/topics'>Topics</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
        {/* url 요청 받아서 url 매핑 후 연결, 컴포넌트를 뷰에 렌더링 */}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* /topics/1 과 같은 경우로 url 요청 되었을 경우 Topics 컴포넌트로 표현 */}
          <Route path='/topics/*' element={<Topics contents={contents} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={'Not found'} />
          {/* /* url은 / 뒤에 어떤 url이든 매칭됨 */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
