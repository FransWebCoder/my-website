import React, {useState} from 'react'
import './footer.css'


// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../Assets/Sound/Valorant - Gaming Sound Effects click.mp3'


const Footer = () => {

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
    <div className="footer">
        <div className="footer__container">
            <div className="footer__title"><i class="ri-code-s-slash-line"></i></div>

            <ul className="footer__list">
                <li>
                    <a 
                        onSetActive={handleSetActive}
                        onMouseEnter={handleHover}
                        onClick={play}
                        onMouseLeave={handleMouseLeave}
                        href="#hero" 
                        className='footer__link'>Main
                    </a>
                </li>
                
                <li>
                    <a 
                        onSetActive={handleSetActive}
                        onMouseEnter={handleHover}
                        onClick={play}
                        onMouseLeave={handleMouseLeave}
                        href="#project" 
                        className='footer__link'>Project
                    </a>
                </li>
                
                <li>
                    <a 
                        onSetActive={handleSetActive}
                        onMouseEnter={handleHover}
                        onClick={play}
                        onMouseLeave={handleMouseLeave}
                        href="#about" 
                        className='footer__link'>About
                    </a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                onMouseEnter={handleHover}
                onClick={play}
                onMouseLeave={handleMouseLeave}
                href="https://www.facebook.com/" 
                className="footer__social-link" 
                target='_blank'>
                    <i class="ri-facebook-circle-fill"></i>
                </a>

                <a 
                onMouseEnter={handleHover}
                onClick={play}
                onMouseLeave={handleMouseLeave}
                href="https://www.instagram.com/" 
                className="footer__social-link" 
                target='_blank'>
                    <i class="ri-instagram-line"></i>
                </a>

                <a 
                onMouseEnter={handleHover}
                onClick={play}
                onMouseLeave={handleMouseLeave}
                href="https://www.twitter.com/" 
                className="footer__social-link" 
                target='_blank'>
                    <i class="ri-twitter-x-line"></i>
                </a>
            </div>

                <span className="footer__copy">&#169;Copyright 2024 by Frans. All right reserved</span>


            {/* NUMBERPAGE */}
            <div className="number__page__home">
                <span className='text__page footer-page'>Footer</span>
            </div>
        </div>
    </div>
  )
}

export default Footer