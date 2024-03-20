import React, { useState } from 'react'
import './navbar.css'

// LOGO
import Logo from '../../Assets/Logo/logo.png'


// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../Assets/Sound/Valorant - Gaming Sound Effects click.mp3'

import { BrowserRouter } from 'react-router-dom'

import { HashLink as Link } from 'react-router-hash-link'

// import Typewriter from "typewriter-effect"
import TypewriterComponent from 'typewriter-effect'


const Navbar = () => {

    // TOGGLE BTN
    const [activeNav, setActiveNav] = useState(false);

    const [active, setActive] = useState("nav__menu")
    
    const [toggleIcon, setToggleIcon] = useState('nav__toggle')
    const toggle=() => {
        setToggleIcon(!toggleIcon)
    };

    const navToggle = () => {
        active === "nav__menu" 
            ? setActive("nav__menu nav__active")
            : setActive("nav__menu")

        // ToggleIcon

        toggleIcon === "nav__toggle" 
            ? setToggleIcon("nav__toggle toggle")
            : setToggleIcon("nav__toggle")
    };


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


    // PLAY SOUND EFFECT IF CLICK
    function play() {
        new Audio(activeSound).play()
    };


    // SHADOW NAVBAR ON SCROLL
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);




  return (
    <BrowserRouter>
    <header className={navbar ? 'header active' : 'header'}>
        <nav className="nav container">
            <a href="#" className="nav__logo">
                {/* <img src={Logo} className='logo' alt="" /> */}
                <span className='logo__text'>
                <TypewriterComponent 
                options={{
                autoStart: true,
                loop: true,
                delay: 20,
                deleteSpeed: 10,
                strings:[
                    "Hai",
                    "I'am",
                    "Frans",
                    "I'am",
                    "Programmer",
                ],
                }} />
                </span>
            </a>

            <div className={active} id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link 
                            onMouseEnter={handleHover}
                            onClick={() => {
                            setActiveNav('#')
                            play()
                            }}
                            onMouseLeave={handleMouseLeave}
                            to="#hero" 
                            className={activeNav === "#" ? "nav__link active-link" : "nav__link"}>
                            Main
                        </Link>
                    </li>
                    
                    <li className="nav__item">
                        <Link 
                            onMouseEnter={handleHover}
                            onClick={() => {
                            setActiveNav('#')
                            play()
                            }}
                            onMouseLeave={handleMouseLeave}
                            to="#about" 
                            className={activeNav === "#" ? "nav__link active-link" : "nav__link"}>
                            About
                        </Link>
                    </li>
                    
                    <li className="nav__item">
                        <Link 
                            onMouseEnter={handleHover}
                            onClick={() => {
                            setActiveNav('#')
                            play()
                            }}
                            onMouseLeave={handleMouseLeave}
                            to="#project" 
                            className={activeNav === "#" ? "nav__link active-link" : "nav__link"}>
                            Project
                        </Link>
                    </li>
                    
                    <li className="nav__item">
                        <Link 
                            onMouseEnter={handleHover}
                            onClick={() => {
                            setActiveNav('#')
                            play()
                            }}
                            onMouseLeave={handleMouseLeave}
                            to="#contact" 
                            className={activeNav === "#" ? "nav__link active-link" : "nav__link"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <button
                onMouseEnter={handleHover} 
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                navToggle()
                toggle()
                play()
                }} 
                className='nav__btn'>
                {toggleIcon ? <i class="ri-menu-4-line menu-icon"></i> : <i class="ri-close-line menu-icon"></i>}  

                <span className="text__btn">
                    FAQ
                </span>
            </button>

        </nav>
    </header>
    </BrowserRouter>
  )
}

export default Navbar