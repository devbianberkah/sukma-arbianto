import logo from './logo.svg';
import './App.css';
import HeaderMenu from './HeaderMenu';
function App() {

  function toggleMenu(){

  }

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
      <nav id="hamburger-nav">
        <div className='logo'>Sukma</div>
        <HeaderMenu />
      </nav>
    </div>
  );
}

export default App;
