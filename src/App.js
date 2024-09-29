import logo from './logo.svg';
  import './App.css';
import './mediaqueries.css';
import { useRef,useEffect } from 'react';
import HeaderMenu from './HeaderMenu';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
function App() {

  const refs = useRef([]); // Create a ref for the section

  useEffect(() => {
    const aboutElement = refs.current;

    // Declare the observer inside the useEffect hook
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the class that triggers the animation
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup function to unobserve elements on unmount
    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

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
              <a href='https://www.linkedin.com/in/sukma-arbianto-santosa-87972585/' target='_blank'>
               <img
                src={window.location.origin+'/assets/linkedin.png'}
                alt="my linkedin profile"
                className='icon'
               ></img>
               </a>
               <a href='https://github.com/devbianberkah' target='_blank'>
               <img
                src={window.location.origin+'/assets/github.png'}
                alt="my Github profile"
                className='icon'
               ></img>
               </a>
            </div>
            </div>
            
          </div>
        </section>
        <AboutSection refs={refs} />
        <ExperienceSection refs={refs} />
      <section id="projects">
       <h1 className='title'>Projects</h1>
       <div className='project-details-container'>
          <div className='event'>
              <div className='project-img-container'>
                <img 
                  src={window.location.origin+'/assets/utas/homepage.png'}
                  alt='img-project'
                  className="project-img"
                />
              </div>
              <h2 className='experience-sub-title project-title'>UTAS Application</h2>
              <p>Improved application performance by migrating from Phalcon to Laravel, enhancing speed, scalability, and maintainability</p>
              <div className='btn-container'>
                <button className='btn btn-color-2 project-btn'>
                Read More
                </button>
              </div>
          </div>
          <div className='event'>
              <div className='project-img-container'>
                <img 
                  src={window.location.origin+'/assets/onedata/home.png'}
                  alt='img-project'
                  className="project-img-2"
                />
              </div>
              <h2 className='experience-sub-title project-title'>Telkom - One Data</h2>
              <p>Developed user interfaces in Angular.js based on Figma designs. Implemented a custom component for reusable form elements, streamlining development processes and reducing the time needed to build similar features</p>
              <div className='btn-container'>
                <button className='btn btn-color-2 project-btn'>
                  Read More
                </button>
            </div>
          </div>
          <div className='event'>
              <div className='project-img-container'><img 
                src={window.location.origin+'/assets/katts/home.png'}
                alt='img-project'
                className="project-img-2"
              />
              </div>
              <h2 className='experience-sub-title project-title'>Floo - Travel Apps</h2>
              <p>A travel app using Flutter, based on Figma designs, aimed at simplifying and improving the travel experience for users. The app provides intuitive features and functionalities to assist people in planning and navigating their trips effectively.</p>
              <div className='btn-container'>
                <button className='btn btn-color-2 project-btn'>
                  Read More
                </button>
            </div>
          </div>
          
       </div>
      </section>
      <section id='contact'>
        <h1 className='title'>Contact</h1>
        <div className='contact-info-upper-container'>
          <div className='contact-info-container'>
            <div className='section__pic-container'>
              <img
                src={window.location.origin+'/assets/profil.jpg'}
                alt="Profile Pic"
                className='about-pic'/>
            </div> 
            <div className='details-container'>
                    <h3 className='title-container'>Lets get in Touch</h3>
                    <p className='details-experience-container'>sukma.arbianto@gmail.com</p>
                    <div className='btn-container'>
              <a className='btn btn-color-2' target='_blank' href='https://docs.google.com/document/d/1rhD7TTAlkUoxoZlsYZNHaF7sNjJrN5Z0MWOPXPL1jkA/pub' >
              My Curriculum Vitae</a> 
              <div id="socials-container">
              <a href='https://www.linkedin.com/in/sukma-arbianto-santosa-87972585/' target='_blank'>
                <img
                src={window.location.origin+'/assets/linkedin.png'}
                alt="my linkedin profile"
                className='icon'
                ></img>
                </a>
                <a href='https://github.com/devbianberkah' target='_blank'>
                <img
                src={window.location.origin+'/assets/github.png'}
                alt="my Github profile"
                className='icon'
                ></img>
              </a>
            </div>
            </div>
            </div> 
          </div>
        </div>
      </section>
      <footer>
        <p>Copyright &#169; 2024 Sukma Arbianto. All Rights Reserverd </p>
      </footer>
    </div>
  );
}

export default App;
