import React, { useState } from 'react'
import './about.css'
import { SKILLS } from '../../Utils/data'
import SkillCard from './SkillsCard/SkillsCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const About = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

  return (
    <div className="about" id="about">
      <div className='about__container'>

        {/* CONTENT */}
        <div className="skills__title title-name-section">Experience

            {/* NUMBERPAGE */}
            <div className="number__page">
                <span className='text__page'>002</span>
            </div>
        </div>

        <div className="skills__content">
            <div className="skills__item">
                {SKILLS.map((item) => (
                    <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => {
                        handleSelectSkill(item);
                    }}
                    />    
                ))}
            </div>

            <div className="skills__info">
                <SkillsInfoCard 
                    heading={selectedSkill.title}
                    skills={selectedSkill.skills}
                />
            </div>
        </div>

      </div>
    </div>
  )
}

export default About