import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import MovieInfo from './components/MovieInfo';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className='wrap'>
      <ul className='menu'>
        <li>
          <Link to='/'>홈 화면 보기</Link>
        </li>
        <li>
          <Link to='/about'>About 화면 보기</Link>
        </li>
        {/* <li>
          <Link to='/movieking'>킹스맨</Link>
        </li>
        <li>
          <Link to='/spider'>스파이더맨</Link>
        </li>
        <li>
          <Link to='/squid'>오징어게임</Link>
        </li> */}
        <li>
          <Link to='/movieInfo'>Movie Info</Link>
        </li>
        <li>
          <a
            href='https://movie.naver.com/'
            target='blank'
            rel='noreferrer noopener'
          >
            네이버 영화
          </a>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movieInfo' element={<MovieInfo movie={movie} />} />
        <Route
          path='/movieDetail/:keyword'
          element={<MovieDetail movie={movie} />}
        />
      </Routes>
    </div>
  );
}

export default App;
