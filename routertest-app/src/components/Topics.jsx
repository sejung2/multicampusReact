import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import Topic from './Topic';

export default function Topics(props) {
  let params = useParams();
  console.log('params', params);
  let contents = props.contents;

  let lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={`/topics/${contents[i].id}`}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <div className='topic'>
      <h2>Topics</h2>
      {/* 아래 목록은 정적태그임 반드시 3개 목록이 생성됨 데이터에 따라 다른 목록을 표현하려고 하면 동적 태그 구성 */}
      {/* <ul>
        <li>
          <NavLink to='/topics/1'>Politics</NavLink>
        </li>
        <li>
          <NavLink to='/topics/2'>Economy</NavLink>
        </li>
        <li>
          <NavLink to='/topics/3'>Society</NavLink>
        </li>
      </ul> */}
      <ul>
        {/* 동적 태그 구성 */}
        {lis}
      </ul>
      <Routes>
        {/* 이 라우터에서는 App에서 매핑된 /topics는 제외시키고 하위 url만 매핑 */}
        {/* <Route path='1' element={<div>Politics Content</div>} />
        <Route path='2' element={<div>Economy Content</div>} />
        <Route path='3' element={<div>Society Content</div>} /> */}
        <Route
          path='/:topics_id'
          element={<Topic content={contents} />}
        ></Route>
      </Routes>
    </div>
  );
}
