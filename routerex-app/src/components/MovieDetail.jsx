import { useParams, Link } from 'react-router-dom';

const data = {
  spider: {
    title: '스파이더맨 노 웨이 홈',
    director: '존 왓츠',
    actor: '톰 홀랜드',
    date: '2021-12-15',
    genre: '액션',
  },
  king: {
    title: '킹스맨 : 퍼스트 에이전트',
    director: '메튜 본',
    actor: '랄프 파인즈',
    date: '2021-12-22',
    genre: '액션',
  },
};

export default function MovieDetail(props) {
  const params = useParams();
  const movie_ar = props.movie;
  //   params에서 전달된 keyword가 data 내에 존재하면 data 반환, 없으면 undefined로 반환
  const movie = movie_ar[params.keyword];
  if (!movie) {
    return <div>영화 정보를 찾을 수 없습니다.</div>;
  }
  return (
    <div>
      <hr />
      <h3>
        {params.keyword} : {movie.title}
        <p>감독: {movie.director}</p>
        <p>배우: {movie.actor}</p>
        <p>개봉일: {movie.date}</p>
        <p>장르: {movie.genre}</p>
      </h3>
    </div>
  );
}
