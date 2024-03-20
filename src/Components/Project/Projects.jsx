import { useEffect, useState } from "react";
import { PROJECTSDATA } from "../../Utils/data"
import { PROJECTNAV } from "../../Utils/data";
import ProjectItem from "./ProjectItem"

// USE SOUND
import useSound from 'use-sound'
import hoverSound from '../../Assets/Sound/Valorant - Choose Gaming Sound Effect.mp3'
import activeSound from '../../Assets/Sound/Valorant - Gaming Sound Effects click.mp3'

const Projects = () => {

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


    // Get Data
    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "all") {
            setProjects(PROJECTSDATA);
        }

        else {
            const newProjects = PROJECTSDATA.filter((project) => {
                return project.category === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);


    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    };


  return (
    <div>
        <div className="project__filters">
            {PROJECTNAV.map((item, index) => {
                return (
                    <span
                    onSetActive={handleSetActive}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => {
                    play ()
                    handleClick(e, index);
                }} 
                className={`${active === index ? 'active-project' : ""} 
                project__item`} 
                    key={index}>
                    {item.name}
                    </span>
                )
            })}
        </div>

        <div className="project__content">
            {projects.map((item) => {
                return <ProjectItem item={item} key={item.id} />
            })}
        </div>
    </div>
  )
}

export default Projects