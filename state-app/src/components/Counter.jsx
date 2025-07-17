import { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>+</button>&nbsp;
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
}
