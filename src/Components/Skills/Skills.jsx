import './Skills.css'
import React, { useState } from 'react'
import config from '../../cards_skills.json'
import CardsSkills from '../Cards/CardsSkills'
import { FaPaw } from "react-icons/fa";

const Skills = () => {

    const firstKey = Object.keys(config)[0]
    const [section, setSection] = useState(firstKey)

    return (
        <React.Fragment>
            <section className='fullskills-frontpage'>
                <h1><FaPaw/> Habilidades <FaPaw/></h1>
                <div className='fullskills-container'>
                    <div className='fullskills-buttons-container'> {
                        Object.entries(config).map(([id, item]) => (
                            <button key={id}
                                className={section === id ? "button-active" : ""}
                                onClick={() => setSection(id)}>{item.name}
                            </button>
                        ))}
                    </div>
                    <div key={section} className='fullskills-cards-container'> {
                            <CardsSkills item={config[section]} skill={section}/>
                        }
                    </div>
                </div>

            </section>
        </React.Fragment>

    )
}

export default Skills
