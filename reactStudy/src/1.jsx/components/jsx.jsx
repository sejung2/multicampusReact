const Jsx = () => {
  const name = '홍길동';
  const number = 100;
  const num = 3;

  //내부함수, 사용자정의 객체 선언
  const person = {
    name: '성춘향',
    age: 20,
  };
  // 내부함수 정의
  function getPerson() {
    return `${person.name} , ${person.age}`;
  }
  return (
    <div>
      <h1>JSX 입니다</h1>
      <h2>안녕!!</h2>
      <h2>{name} 안녕!!</h2>
      {/* 스크립트 영역{}이므로 상수 name 접근 */}
      {number || '오리'}
      {number && '오리'}
      {/* {false && '오리'} */}
      {
        //조건 연산자 사용, 조건에 따라 실행할 문장이 두 문자 이상이면 반드시 소괄호로 묶어야 함
        name == '홍길동' ? <h3>홍길동입니다</h3> : <h3>홍길동이 아닙니다</h3>
      }
      {name == '이몽룡' ? <h3>이몽룡입니다</h3> : <h3>이몽룡이 아닙니다</h3>}
      <div
        style={{
          margin: '0 auto',
          width: '50px',
          backgroundColor: 'red',
          color: 'white',
          fontSize: '36px',
          fontWeight: 'bold',
          padding: '10px',
          marginTop: '20px',
        }}
      >
        인라인 스타일링 적용
      </div>
      <div className='rect'>classname속성 사용</div>
      주소 : 서울 <br /> {/* 단일 태그도 닫는 표시 /를 해줘야함 */}
      // JSX 주석은 아님
      <br />
      /* 주석아님 문자열 처리 됨 */
      {/* 주석은 이렇게 */}
      {
        // 자바스크립트 영역 - 자동호출되는 함수
        (function () {
          if (num == 1) return <div>value = 1</div>;
          if (num == 2) return <div>value = 2</div>;
          if (num == 3) return <div>value = 3</div>;
        })()
      }
      {/* 사용자 정의 객체값 반환하는 함수, 호출 함수명() */}
      {/* 문자열 getPerson() 출력 */}
      <div>{getPerson()}</div>
      <div>{getPerson()}</div>
    </div>
  );
};

export default Jsx;
