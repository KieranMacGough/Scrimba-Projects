import logo from './logo.svg';
import './App.css';
import Info from './components/Info.js';
import About from './components/About.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='App'>
      <div className='card'>
      <div className='main-content'>
        <Info />
        <div className='about-and-interests'>
          <About />
          <Interests />
        </div>
      </div>
    <Footer />
    </div>
    </div>
  );
}

export default App;
