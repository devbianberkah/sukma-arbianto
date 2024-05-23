import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav id="desktop-nav">
          <div className='logo'>Sukma</div>
          <div>
              <ul className="nav-links">
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
          </div>
      </nav>
    </div>
  );
}

export default App;
