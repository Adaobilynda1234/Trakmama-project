import React from 'react';
import "../styles/global.css";
import aboutImage from '../assets/about.png';
import missionImage from '../assets/mission.png'


const Mission = () => {
    return (
        <div>
             <main>
        <section className="about-us">
          <img src="aboutImage" alt="About Us" className="about-us-image"/>
          <div className="about-us-content">
            <h2 className='h2'>About Us</h2>
            <p className='p'>
              We use AI technology to provide virtual healthcare services to pregnant women aiming to overcome barriers and increase access to quality prenatal care, particularly in rural and underserved areas, leading to improved health outcomes, enhanced patient experience, and more efficient healthcare delivery.
            </p>
          </div>
        </section>
        <section className="our-mission">
          <div className="mission-content">
            <h2 className='h2'>Our Mission</h2>
            <p className='p'>
              To enhance maternal outcomes by providing tools and resources to help expectant and new moms maintain optimal health and identify potential risk early.
            </p>
          </div>
          <img src="missionImage" alt="Our Mission" className="mission-image"/>
        </section>
      </main>
        </div>

    );
}

export default Mission;