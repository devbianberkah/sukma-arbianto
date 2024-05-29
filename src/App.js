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
        <section id="profile">
          <div className="section__pic-container">
            <img src={window.location.origin+'/img/profil.jpg'} alt='profile-img'></img>
          </div>
          <div className='section__text'>
            <p className='section__text_p1'>Hello, I'm</p>
            <h1 className='title'>Sukma</h1>
            <p className='section__text_p2'>Frontend Developer</p>
            <div className='btn-container'>
              <a className='btn btn-color-2' target='_blank' href='https://drive.google.com/file/d/1iJ7ZprOdJn9PSxVtvjA7igF7RtQnb8lv/view?usp=sharing' download='cv'>
              Download CV</a> 
              <button className='btn btn-color-1'>
              Contact Info
              </button>
            </div>
            <div id="socials-container">
               <img src={window.location.origin+'/assets/linkedin.png'}></img>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
