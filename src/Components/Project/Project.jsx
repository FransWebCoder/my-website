import React, { useState } from 'react'
import Projects from './Projects'
import './project.css'

// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../Assets/Sound/Valorant - Gaming Sound Effects click.mp3'

const Project = () => {

// HOVER SOUND EFFECT
const soundUrl = hoverSound;
const [isButtonHovered, setIsButtonHovered] = useState(false);

const [playHover] = useSound(soundUrl, { volume: 10 });

const handleHover = () => {
    if (!isButtonHovered) {
    playHover();
    setIsButtonHovered(true);
    }
};

const handleMouseLeave = () => {
    setIsButtonHovered(false);
};


// IF CLICK ITEM
// Function to handle the activation of a link.
const handleSetActive = (to) => {
    console.log(to);
    };

function play() {
    new Audio(activeSound).play()
}


  return (
    <div className="project" id='project'>
        <div className="project__container">
          <div className="project__title title-name-section">Project
            {/* NUMBERPAGE */}
              <div className="number__page">
                  <span className='text__page'>003</span>
              </div>
          </div>

          <Projects />

          <div className="see__all__project">
            <div 
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={play}
            className="project__all">
              <button className='text__project'>See All Project</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project