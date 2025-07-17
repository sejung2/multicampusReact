import App01 from './1.jsx/components/jsx';
import App02 from './2.propTest/components/propApp';
import AppEx from './ex.studentTest/components/exApp';
import { Routes, Route, Link } from 'react-router-dom';

function Routers() {
  const PageList = ['1.jsx', '2.propTest', 'ex.studentTest'];
  return (
    <div id='routerPage'>
      <h1>라우터 페이지</h1>
      {PageList.map((page) => (
        <Link key={page} to={`/${page}`}>
          {page}
        </Link>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Routers />} />
      <Route path='/1.jsx' element={<App01 />} />
      <Route path='/2.propTest' element={<App02 />} />
      <Route path='/ex.studentTest' element={<AppEx />} />
    </Routes>
  );
}
