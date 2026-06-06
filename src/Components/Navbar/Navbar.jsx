import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import "./Navbar.css";
import Cat from "../Cat/Cat";
import Socialmedia from "../Socialmedia/Socialmedia";
import LangButton from "../LangButton/LangButton";
import { LanguageContext } from "../Language/LanguageContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { get } = useContext(LanguageContext)

    useEffect(() => {
        document.documentElement.classList.toggle("no-scroll", isOpen);
        document.body.classList.toggle("no-scroll", isOpen);

        return () => {
            document.documentElement.classList.remove("no-scroll");
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        if (isOpen) toggleMenu();
    };

    return (
        <header>
            <nav>
                <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <ul className={`nav-menu ${isOpen ? "actived" : ""}`}>
                    <Cat />
                    <p className="logo">NightSky</p>
                    <LangButton />
                    <li> <NavLink to="/" onClick={closeMenu}> {get("home")} </NavLink></li>
                    <li><NavLink to="/works" onClick={closeMenu}> {get("projects")} </NavLink></li>
                    <li> <NavLink to="/skills" onClick={closeMenu}> {get("skills")} </NavLink></li>
                    <li> <a href={get("link_whatsapp")} target="_blank" onClick={closeMenu}> {get("contact")} </a></li>
                    <Socialmedia />
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
