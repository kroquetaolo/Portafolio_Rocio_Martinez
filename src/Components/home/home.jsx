import React, { useContext, useEffect, useState } from "react"
import './home.css'
import cards_works from '../../cards_home.json'
import Cards from "../Cards/Cards"
import { NavLink } from "react-router-dom"
import SVGselector from "../SVGcomp/SVGselector"
import skills_config from "../../cards_skills.json"
import Rating from "../Utils/Rating"
import { LanguageContext } from "../Language/LanguageContext"

const Home = () => {
    const { get } = useContext(LanguageContext)
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPageLoaded(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleLoad = () => {
            setPageLoaded(true);
        };

        window.addEventListener("load", handleLoad);

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <React.Fragment>
            <section className="frontpage">
                <SVGselector className="svg-bg" type={'background'} width="761" height="677" />

                <div className="title">
                    <h1>Rocío Martinez</h1>
                    <h2>{get("user-profesional-title")}</h2>
                    <p><b>“</b>{get("portada_sobre_mi")}<b>”</b></p>
                    <button className="title-contact"><a href={get("link_whatsapp")} target="_blank">{get("contact-me")}</a></button>
                </div>
                <div className="front-image">
                    <svg viewBox="-100 0 776.86 629">
                        <defs>
                            <clipPath id="blob">
                                <path fill="var(--primary)" d="M447.29,0h272.71v130.82c12.87,70.93,66.3,134.15,55.4,205.39-12.07,78.93-50.56,154.25-112.87,205.98-65.26,54.18-151.7,99.71-235.78,83.49-81.49-15.72-106.88-118.85-176.51-163.04-76.18-48.35-209-21.85-243.82-103.72-34.11-80.2,77.53-150.66,99.88-234.7C131.07,31.11,111.28,0,111.28,0h336.01Z" />
                            </clipPath>
                        </defs>
                        <image
                            className="front-image-picture"
                            href={"/images/home/frontimage.png"}
                            width="776.86"
                            height="1000"
                            y="-45"
                            clipPath="url(#blob)"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </svg>
                    <div className="front-image-workingon">
                        <p className={`front-image-workingon-text ${pageLoaded ? "visible" : ""}`}>
                            <strong>{get("job-position-utf")}</strong>
                            {get("job-position")} <strong>{get("job-company-name")}</strong>
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className="titles-container">
                    <h2><span>{get("title-jobs-utf")}</span>{get("title-jobs")}</h2>
                    <NavLink to='/works'>{get("title-see-all")}</NavLink>
                </div>
                <div className="cards-container">
                    {
                        cards_works.map((card, index) => (
                            <Cards key={index} info={card} />
                        ))
                    }
                </div>
            </section>
            <section>
                <div className="titles-container">
                    <h2><span>{get("title-skills-utf")}</span>{get("title-skills")}</h2>
                    <NavLink to='/skills'>{get("title-see-all")}</NavLink>
                </div>

                <div className="home-skills-wrapper">
                    <div className="home-skills-container"> {
                        Object.entries(skills_config).map(([id, item]) => (
                            <div className="home-skills-item" key={id}>
                                <div className="home-skills-svg"><SVGselector type={id} /> <p className="home-skills-svg-text">{item.name}</p></div>
                                <div className="home-skills-rating">
                                    <div className="home-skills-line"></div>
                                    <div className="home-skills-item-start"><Rating size={32} value={item.proficiency} /></div>
                                    <div className="home-skills-line"></div>
                                </div>
                                <div className="home-skills-item-description"> {item.description} </div>
                            </div>
                        ))
                    } </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home
