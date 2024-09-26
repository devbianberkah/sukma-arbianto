import logo from './logo.svg';
  import './App.css';
import './mediaqueries.css';
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
          <div>
              <ul className="nav-links">
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Project</a></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
          </div>
      </nav>
      <nav id="hamburger-nav">
        <HeaderMenu />
      </nav>
        <section id="profile">
          
          <div className='section__text'>
            <h1 className='section__text__p1'>Hello, I'm</h1>
            <h1 className='title'>Sukma Arbianto</h1>
            <p className='section__text__p2'>and I'm a Fullstack Developer</p>
            <div className='btn-container'>
              <a className='btn btn-color-2' target='_blank' href='https://docs.google.com/document/d/1rhD7TTAlkUoxoZlsYZNHaF7sNjJrN5Z0MWOPXPL1jkA/pub' >
              My Curriculum Vitae</a> 
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
            
          </div>
        </section>
        <section id="about">
          <h2 className='section__text__p1'>Get to Know More</h2>
          <h2 className='title'>About Me</h2>
            <div className='section-container'>
              
              <div className='about-details-container'>
                <div className='about-containers'>
                  <div className='details-container'>
                    <h3>Experience</h3>
                    <p>8+ years of Fullstack Development </p>
                  </div>
                  <div className='details-container'>
                     <h3>Education</h3>
                      <p>S.Kom, Bachelors Degree</p>
                  </div>
                </div>
                <div className='text-container'>
                  <p>
                  I have 8 years of experience working both onsite and remotely as a Fullstack Developer in fast-paced startup environments. I specialize in web and mobile application development, with a strong focus on frontend technologies. I am skilled at translating complex UI/UX designs into pixel-perfect, user-centric interfaces, while ensuring robust backend architecture for seamless functionality.                </p>
                </div>
                <div className="section__pic-profile-container">
                  <img src={window.location.origin+'/assets/forest.jpg'} alt='profile-img'></img>
                </div>
              </div>
            </div>
          </section>
        <section id="experience">
          <h1 className='title'>My Career Journey</h1>
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
        <p className='section__text__p1'>Get in Touch</p>
        <h1 className='title'>Contact Me</h1>
        <div className='contact-info-upper-container'>
          <div className='contact-info-container'>
            <img 
              src={window.location.origin+'/assets/email.png'}
              alt='email icon'
              className='icon contact-icon'
            />
            <p><a href='https://www.linkedin.com/in/sukma-arbianto-santosa-87972585/' target="_blank">Linkeidn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
       
          <div className='section__pic-container'>
                <img
                  src={window.location.origin+'/assets/profil.jpg'}
                  alt="Profile Pic"
                  className='about-pic'/>
              </div>
          <div className='nav-links-container'>
            <ul className='nav-links'>
              <li><a href='#about'>About</a></li>
              <li><a href='#experience'>Experience</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 Sukma Arbianto. All Rights Reserverd </p>
      </footer>
    </div>
  );
}

export default App;
