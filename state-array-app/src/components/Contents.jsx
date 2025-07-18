import React from 'react';
import { useState } from 'react';

const Contents = () => {
  //   let title = '지금 우리 학교는';
  const [titles, setTitle] = useState([
    '지금 우리 학교는',
    '오징어 게임',
    'D.P.',
    '지금, 헤어지는 중입니다.',
  ]);
  let [item, setItem] = useState('');

  const onItemChnage = (e) => {
    setItem(e.target.value);
  };

  const onItemAdd = () => {
    if (item === '') {
      alert('항목을 입력하세요');
      document.getElementById('titleInput').focus();
      return;
    } else if (titles.includes(item)) {
      // includes 메서드로 중복 확인
      alert('이미 존재하는 항목입니다.');
      setItem('');
      document.getElementById('titleInput').focus();
      return; // 여기에 return 추가!
    }

    // setTitle(titles.concat(item));
    setTitle((title) => [...title, item]); // 자바스크립트 스프레드 연산자, 객체나 배열을 복사할 때 사용
    setItem('');
  };
  const onItemRemove = (title, index) => {
    // 제목으로 삭제 (index는 나중에 필요할 수 있어서 매개변수로 유지)
    setTitle(titles.filter((item) => item !== title));
  };

  return (
    <div>
      <div className='header'>
        <h3>인기 컨텐츠</h3>
      </div>
      <div className='content'>
        {titles.map((title, index) => {
          return (
            <div key={index}>
              <p>
                {index} : {title}
                &nbsp;
                <button onClick={() => onItemRemove(title, index)}>삭제</button>
              </p>
              <hr />
            </div>
          );
        })}
        <input
          type='text'
          id='titleInput'
          value={item}
          onChange={onItemChnage}
        />
        <button onClick={onItemAdd}>항목추가</button>
      </div>
      {/* <div>
        <p>{title[0]}</p>
      </div>
      <div>
        <p>{title[1]}</p>
      </div> */}
    </div>
  );
};

export default Contents;
