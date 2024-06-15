import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import HeaderMenu from './HeaderMenu';
function App() {

  const sectionAboutRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top:elementRef.current.offsetTop, behavior:'smooth'
    });
  };

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
          <div className="section__pic-profile-container">
            <img src={window.location.origin+'/assets/profil.jpg'} alt='profile-img'></img>
          </div>
          <div className='section__text'>
            <p className='section__text__p1'>Hello, I'm</p>
            <h1 className='title'>Sukma</h1>
            <p className='section__text__p2'>Frontend Developer</p>
            <div className='btn-container'>
              <a className='btn btn-color-2' target='_blank' href='https://drive.google.com/file/d/1iJ7ZprOdJn9PSxVtvjA7igF7RtQnb8lv/view?usp=sharing' download='cv'>
              Download CV</a> 
              <button className='btn btn-color-1' onClick={()=>scrollToSection(sectionAboutRef)}>
              Contact Info
              </button>
            </div>
            <div id="socials-container">
               <img
                src={window.location.origin+'/assets/linkedin.png'}
                alt="my linkedin profile"
                className='icon'
               ></img>
               <img
                src={window.location.origin+'/assets/github.png'}
                alt="my Github profile"
                className='icon'
               ></img>
            </div>
          </div>
        </section>
        <section id="about">
          <p className='section__text__p1'>Get to Know More</p>
          <h1 className='title'>About Me</h1>
            <div className='section-container'>
              <div className='section__pic-container'>
                <img
                  src={window.location.origin+'/assets/profil.jpg'}
                  alt="Profile Pic"
                  className='about-pic'/>
              </div>
              <div className='about-details-container'>
                <div className='about-containers'>
                  <div className='details-container'>
                    <img 
                      src={window.location.origin+'/assets/experience.png'}
                      alt='Experience Icon'
                      className='icon'
                    />
                    <h3>Experience</h3>
                    <p>2+ years<br/>Frontend Development </p>
                  </div>
                  <div className='details-container'>
                      <img
                        src={window.location.origin+'/assets/education.png'}
                        alt='education icon'
                        className='icon'
                      />
                      <h3>Education</h3>
                      <p>S.Kom, Bachelors Degree</p>
                    </div>
              </div>
              <div className='text-container'>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              </div>
            </div>
            <img 
            src={window.location.origin+'/assets/arrow.png'}
            alt='Arrow icon'
            className='icon arrow'
          />
        </section>
        <section id="experience">
          <p className='section__text__p1'>Explore My</p>
          <h1 className='title'>Experience</h1>
          <div className='experience-details-container'>
              <div className='about-containers'>
                <div className='details-container'>
                  <h2 className='experience-sub-title'>Frontend Development</h2>
                  <div className='article-container'>
                    <article>
                      <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                      <div className='article-sub-container'>
                        <h3>HTML</h3>
                        <p>Experienced</p>
                      </div>
                    </article>
                    <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>CSS</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>SASS</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Javascript</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Typescript</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Material UI</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  </div>
                </div>
                <div className='details-container'>
                <h2 className='experience-sub-title'>Backend Development</h2>
                <div className='article-container'>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Laravel</h3>
                      <p>Experienced</p>
                    </div>
                  </article>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Phalcon</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                  <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                  <div className='article-sub-container'>
                    <h3>C#</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                  <div className='article-sub-container'>
                    <h3>Git</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                  <div className='article-sub-container'>
                    <h3>Docker</h3>
                    <p>Basic</p>
                  </div>
                </article>
            </div>
          </div>
          </div>
          </div>
          <img 
          src={window.location.origin+'/assets/arrow.png'}
          alt='Arrow icon'
          className='icon arrow'
        />
      </section>
      <section id="projects">
       <p className='section__text__p1'>Showcasing My</p>
       <h1 className='title'>Project</h1>
       <div className='experience-details-container'>
         <div className='about-containers'>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img 
                src={window.location.origin+'/assets/project-1.png'}
                alt='img-project'
                class="project-img"
              />
              <h2 className='experience-sub-title project-title'>Project One</h2>
              <div className='btn-container'>
                <button className='btn btn-color-2 project-btn'>
                  Github
                </button>
                <button className='btn btn-color-2 project-btn'>
                Live Demo
              </button>
              </div>
            </div>
          </div>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img 
                src={window.location.origin+'/assets/project-2.png'}
                alt='img-project'
                class="project-img"
              />
              <h2 className='experience-sub-title project-title'>Project Two</h2>
              <div className='btn-container'>
                <button className='btn btn-color-2 project-btn'>
                  Github
                </button>
                <button className='btn btn-color-2 project-btn'>
                Live Demo
              </button>
              </div>
            </div>
          </div>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img 
                src={window.location.origin+'/assets/project-3.png'}
                alt='img-project'
                class="project-img"
              />
              <h2 className='experience-sub-title project-title'>Project Three</h2>
              <div className='btn-container'>
                <button className='btn btn-color-2 project-btn'>
                  Github
                </button>
                <button className='btn btn-color-2 project-btn'>
                Live Demo
              </button>
              </div>
            </div>
          </div>
         </div>
       </div>
      <img 
          src={window.location.origin+'/assets/arrow.png'}
          alt='Arrow icon'
          className='icon arrow'
        />
      </section>
      <section id='contact'>
      
      </section>
    </div>
  );
}

export default App;
