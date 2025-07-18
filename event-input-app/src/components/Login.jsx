import React from 'react';
import { useState } from 'react';

const Login = () => {
  const id = 'abcd';
  const pass = '1234';

  const [inputId, setInputId] = useState('');
  const [inputPass, setInputPass] = useState('');

  return (
    <div>
      <form>
        <label>
          ID :
          <input type='text' onChange={(e) => setInputId(e.target.value)} />
        </label>
        <br />
        <label>
          Pass :
          <input
            type='password'
            onChange={(e) => setInputPass(e.target.value)}
          />
        </label>
        <br />
        <button
          type='submit'
          onClick={() => {
            if (inputId == id && inputPass == pass) {
              alert('로그인 성공');
            } else {
              alert('로그인 실패');
            }
          }}
        >
          확인
        </button>
      </form>
    </div>
  );
};

export default Login;
