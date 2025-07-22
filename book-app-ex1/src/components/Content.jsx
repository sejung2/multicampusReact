import { Link } from 'react-router-dom';

export default function Content(props) {
  const { book } = props;
  if (!book || book.length === 0) {
    return <div>책 정보가 없습니다.</div>;
  }

  return (
    <div>
      <h1>책 정보</h1>
      <table border='1'>
        <tbody>
          <tr>
            <th>제목</th>
            <th>작가</th>
            <th>장르</th>
          </tr>
          {book.map((book_ar) => (
            <tr key={book_ar.id}>
              <td>
                <Link to={'/book/' + book_ar.id}>{book_ar.title}</Link>
              </td>
              <td>{book_ar.writer}</td>
              <td>{book_ar.genres}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
