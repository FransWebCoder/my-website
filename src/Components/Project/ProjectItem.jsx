import { useState } from 'react';

// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../Assets/Sound/Valorant - Gaming Sound Effects click.mp3'



const ProjectItem = ({ item }) => {

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
    <div className="project__card" key={item.id}
        onSetActive={handleSetActive}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
    >
        <div>
            <img src={item.image} alt="" className='project__img' />
            <div className="project__mask"></div>
        </div>
        
        <span className="project__category">{item.category}</span>
        <h3 className="projects__title">{item.title}</h3>
        <a href="#" className="project__button">
            <i class="ri-links-line project__button-icon"
                onClick={play}>
            </i>
        </a>
    </div>
  )
}

export default ProjectItem