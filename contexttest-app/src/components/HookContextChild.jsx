import { useContext } from 'react';
import { MyAppContext } from '../mainApp';

export function HookContextChild() {
  return (
    <div id='c_child'>
      <HookContextGrand />
    </div>
  );
}

export function HookContextGrand() {
  const { title, lang } = useContext(MyAppContext);
  return (
    <div id='c_child-grand'>
      {title}({lang})
    </div>
  );
}
