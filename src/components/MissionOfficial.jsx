import React from 'react';
import "../styles/global.css";
import aboutImage from '../assets/about-us.png';
import missionImage from '../assets/mission-pic.png'

const Mission = () => {
    return (
        <div>
         <main>
                <section className="about-us">
                    <img src={aboutImage} alt="About Us" className="about-us-image"/>
                    <div className="about-us-content">
                        <h2 className='h2'>About Us</h2>
                        <p className='p'>
                            We use AI technology to provide virtual<pre/> healthcare services to pregnant woman<pre/> aiming to overcome barriers and increase<pre/> access to quality prenatal care,<pre/> particularly in rural and underserved areas,<pre/> leading to improved health outcomes, <pre/> patient experience, and more<pre/> efficient healthcare delivery.
                        </p>
                    </div>
                </section>
                <section className="our-mission">
                    <div className="mission-content">
                        <h2 className='h2'>Our Mission</h2>
                        <p className='p'>
                            To enhance maternal outcomes by<pre/> providing tools and resources to help<pre/> expectant and new moms maintain <pre/>optimal health and identify potential risk<pre/> early.
                        </p>
                    </div>
                    <img src={missionImage} alt="Our Mission" className="mission-image"/>
                </section>
            </main>
        </div>

    );
}

export default Mission;