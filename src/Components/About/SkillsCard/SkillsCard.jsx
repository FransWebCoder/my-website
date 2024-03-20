import React, { useState } from 'react'
import './skillscard.css'


// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../../Assets/Sound/Valorant - Gaming Sound Effects click.mp3'


const SkillCard = ({ title, iconUrl, isActive, onClick }) => {

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
    <div 
        onSetActive={handleSetActive}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => {
            play()
            onClick()
        }}
        >

        <div className="skill-icon">
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>
    </div>
  )
}

export default SkillCard