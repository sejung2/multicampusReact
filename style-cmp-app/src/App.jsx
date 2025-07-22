import './App.css';
import ReactButton from './components/ReactButton.jsx';
import StyledButton from './components/StyledButton.jsx';
import { SimpleButton, LarggeButton } from './components/CreateButton.jsx';
import { ReactLargeButton } from './components/ReactExpand.jsx';
import { PrimaryButton } from './components/DynamicsStyle.jsx';
function App() {
  return (
    <div className='app'>
      <ReactButton children={'ReactButton'} />
      <StyledButton children={'StyledButton'} />
      <SimpleButton children={'SimpleButton'} />
      <LarggeButton children={'LarggeButton'} />
      <ReactLargeButton children={'ReactLargeButton'} />
      <PrimaryButton children={'PrimaryButton'} />
      <PrimaryButton children={'PrimaryButton'} />
    </div>
  );
}

export default App;
