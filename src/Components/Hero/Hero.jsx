import React, { useState } from 'react'
import './hero.css'

// IMAGES
import Char1 from '../../Assets/Images/hero.png'

// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../Assets/Sound/Valorant - Gaming Sound Effects click.mp3'

const Hero = () => {

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
    <div className="hero" id="hero">
        <div className="hero__title">
            <div className="hero__text"> 
                Where <span className='meta__text'>Logic</span> <br/>
                Becomes  <br/>
                <span className='meta__text'>Magic</span>
            </div>

            <span className='hero__desc'>
                Coding is hard but, the satisfaction is priceless
            </span>

            <div className='hero__btn'>
                <button 
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                onClick={play}
                className="hero__btn__left btn-item">Explore</button>
                
                <a href='#' 
                className="hero__btn__right btn-item">See all project</a>
            </div>
        </div>

        <div className="boxs__images">
            <img className='hero__img' src={Char1} alt="" />
        </div>
    </div>

  )
}

export default Hero