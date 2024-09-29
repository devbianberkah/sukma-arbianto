import React, { useEffect, useRef } from "react";
import "./App.css"; // Include the CSS here

const ExperienceSection = ({refs}) => {
         // Empty dependency array to run this effect only once on mount
  return (
    <section id="experience">
    <h1 className='title' ref={(el)=>(refs.current[2]=el)}>My Career Journey</h1>
    <div className="container">
      <h1></h1>
      <div className="timeline-wrapper">
          <div className="timeline">
            <div className="event" ref={(el)=>(refs.current[3]=el)}>
              <h3>Full Stack Developer</h3>
              <p>
                <a target='_blank' href='https://profio.co.id/'>PT. Profio Teknova Indonesia</a>
              </p>
              <p>2015-2022</p>
            </div>  
            <div className="event" ref={(el)=>(refs.current[4]=el)}>
              <h3>Web Developer</h3>
              <p>
                <a target='_blank' href='https://kirim.email/'>PT. Kirim Email Indonesia</a>
              </p>
              <p>2022-Present</p>
            </div>
          </div>
      </div>
    </div>
  </section>
  );
};

export default ExperienceSection;
