import React, { useContext, useEffect } from 'react'
import './works.css'
import CardsWorks from '../Cards/CardsWorks'
import { FaPaw } from "react-icons/fa";
import { LanguageContext } from '../Language/LanguageContext'

const Works = () => {

    const {
        get,
        getCard,
        getSections,
        getWorkSection,
        setWorkSection,
        work_section
    } = useContext(LanguageContext)

    const workSection = getWorkSection();
    const cardsData = getCard()?.[workSection] ?? [];

    useEffect(() => {
        const active = document.querySelector('.button-active')

        if (active) {
            active.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            })
        }
    }, [workSection])

    return (
        <React.Fragment>
            <section className='work-frontpage'>
                <h1>
                    <FaPaw /> {get("title-jobs")} <FaPaw />
                </h1>

                <div className='select-buttons-container'>
                    {
                        getSections().map((sectionKey, index) => (
                            <button
                                key={sectionKey}
                                className={work_section === index ? "button-active" : ""}
                                onClick={() => setWorkSection(index)}
                            >
                                {sectionKey}
                            </button>
                        ))
                    }
                </div>
            </section>

            <section>
                <div className="cards-container">
                    {
                        cardsData.map((card) => (
                            <CardsWorks
                                key={card.images[0]}
                                info={card}
                            />
                        ))
                    }
                </div>
            </section>

        </React.Fragment>
    )
}

export default Works