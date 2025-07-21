import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Content from './components/Content';
import Book from './components/Book';

function App() {
  const book = [
    {
      id: 1,
      title: '쉽게 배우는 자료구조 with 자바',
      writer: '문병로',
      genres: 'IT/컴퓨터',
    },
    {
      id: 2,
      title: '서비스 기획자로 일하고 있습니다',
      writer: '강승훈',
      genres: 'IT/컴퓨터',
    },
  ];
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/content'>Content</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/content' element={<Content book={book} />} />
        <Route path='/book/:keyword' element={<Book book={book} />} />
      </Routes>
    </div>
  );
}

export default App;
