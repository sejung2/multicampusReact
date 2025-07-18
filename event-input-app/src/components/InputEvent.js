import { useState } from 'react';

export default function InputEvent() {
  const [title, setTitle] = useState('지금 우리 학교는');
  return (
    <div>
      <input type='text' onChange={(e) => console.log(e.target.value)} />
    </div>
  );
}
