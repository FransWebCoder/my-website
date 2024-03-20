import React, { useState } from 'react'
import './contactform.css'

// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../../Assets/Sound/Valorant - Gaming Sound Effects click.mp3'

const ContactForm = () => {

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
    <div className="contact__form__content">
        <form action="">
            <div className="name__container">
                <input type="text" name='firsname' placeholder='First Name' />
                <input type="text" name='lastname' placeholder='Last Name' />
            </div>

            <input type="text" name='email' placeholder='Email' />
            <textarea name="message" type="text" placeholder="Message" rows="3" />

            <button
                onSetActive={handleSetActive}
                onMouseEnter={handleHover}
                onClick={play}
                onMouseLeave={handleMouseLeave}
                >SEND
            </button>
        </form>
    </div>
  )
}

export default ContactForm