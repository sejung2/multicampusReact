import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
