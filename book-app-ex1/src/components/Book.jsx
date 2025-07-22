import { useParams } from 'react-router-dom';

export default function Book(props) {
  const params = useParams(); //영화 정보의 id값이 반환됨
  const book_ar = props.book;
  //params에서 전달된 keyword가 data내에 존재하면 data 반환, 없으면 undefined로 반환 됨
  const book = book_ar[parseInt(params.keyword) - 1];
  console.log(params);
  if (!book) {
    return (
      <div>
        <hr />책 정보를 찾을 수 없습니다.
      </div>
    );
  }
  return (
    <div>
      <h3>
        {params.keyword} : {book.title}
      </h3>
      <p>작가: {book.writer}</p>
      <p>장르: {book.genres}</p>
    </div>
  );
}
