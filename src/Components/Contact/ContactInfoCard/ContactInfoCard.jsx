import React, { useState } from 'react'
import './contactinfocard.css'

// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'

const ContactInfoCard = ({ iconUrl, text }) => {

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


  return (
    <div className='contact__details__card'
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        >
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>

        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard