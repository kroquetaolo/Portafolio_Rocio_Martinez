import './Skills.css'
import React, { useEffect, useState } from 'react'
import config from '../../cards_skills.json'
import CardsSkills from '../Cards/CardsSkills'
import { FaPaw } from "react-icons/fa";

const Skills = () => {
    const workinprogress = false;
    const workinprogress_image = '/images/workinprogress.png'

    const firstKey = Object.keys(config)[0]
    const [section, setSection] = useState(firstKey)


    const [t, setT] = useState(0);
    const max = 120;

    useEffect(() => {
        const id = setInterval(() => setT(t => t + 1), 100);
        return () => clearInterval(id);
    }, []);

    const timer = max - Math.abs((t % (max * 2)) - max);

    if (workinprogress) {
        return (
            <section className="work-frontpage">
                <h1><FaPaw /> Habilidades <FaPaw /></h1>
                <div className="work-in-progress">
                    <img src={workinprogress_image} alt="Work in progress" />
                </div>
            </section>
        );
    }
    return (
        <React.Fragment>
            <section className='fullskills-frontpage'>
                <h1><FaPaw /> Habilidades <FaPaw /></h1>
                <div className='fullskills-container'>
                    <div className='fullskills-buttons-container'> 
                        <h2>Categorias</h2>
                        {
                        Object.entries(config).map(([id, item]) => (
                            <button key={id}
                                className={section === id ? "button-active" : ""}
                                onClick={() => setSection(id)}>{item.name}
                            </button>
                        ))}
                    </div>
                    <div key={section} className='fullskills-cards-container'> {
                        <CardsSkills item={config[section]} skill={section} dash={timer} />
                    }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Skills
