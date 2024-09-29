import React, { useEffect, useRef } from "react";
import "./App.css"; // Include the CSS here

const AboutSection = ({refs}) => {
         // Empty dependency array to run this effect only once on mount
  return (
   <section id="about" className='about-section' >
        <h2 className='title' ref={(el)=>(refs.current[0]=el)}>About Me</h2>
            <div className='section-container'>
            <div className='about-details-container'>
                <div className='about-containers' ref={(el)=>(refs.current[1]=el)}>
                  <div className='details-container'>
                    <h3 className='title-container'>Get to Know Me</h3>
                    <p className='details-experience-container'>I am a Fullstack Developer with over 8 years of experience building and managing both backend and frontend aspects of websites and web applications, as well as developing mobile applications.</p>
                    <p className='details-experience-container'>I’m currently open to job opportunities where I can contribute my skills, continue learning, and grow professionally. If you have a relevant opportunity that aligns with my experience, feel free to reach out.</p>
                 
                  </div>
                  <div className='details-container'>
                     <h3>My Skills</h3>
                     <div className='article-container'>
                     <article>
                       <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                       <div className='article-sub-container'>
                         <h3>HTML</h3>
                       </div>
                     </article>
                     <article>
                     <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                     <div className='article-sub-container'>
                       <h3>CSS</h3>
                       
                     </div>
                   </article>
                   <article>
                     <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                     <div className='article-sub-container'>
                       <h3>Javascript</h3>
                     </div>
                   </article>
                   <article>
                     <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                     <div className='article-sub-container'>
                       <h3>AngularJs</h3>
                     </div>
                   </article>
                   <article>
                     <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                     <div className='article-sub-container'>
                       <h3>Typescript</h3>
                       
                     </div>
                   </article>
                   <article>
                     <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                     <div className='article-sub-container'>
                       <h3>ReactJs</h3>
                       <p></p>
                     </div>
                   </article>
                   <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Laravel</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Phalcon</h3>
                    </div>
                  </article>
                  <article>
                  <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                  <div className='article-sub-container'>
                    <h3>C#</h3>
                    
                  </div>
                  </article>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Git</h3>
                      
                    </div>
                  </article>
                  <article>
                    <img src={window.location.origin+'/assets/checkmark.png'} alt='Experience icon' className='icon'/>
                    <div className='article-sub-container'>
                      <h3>Docker</h3>
                      
                    </div>
                  </article>
                   </div>
                  </div>
                </div>   
              </div>
            </div>
    </section>
  );
};

export default AboutSection;
