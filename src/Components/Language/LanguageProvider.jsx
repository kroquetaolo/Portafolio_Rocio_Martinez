import { useState } from "react";
import { skills, cards, translations } from './Translations';
import { LanguageContext } from './LanguageContext';

export function LanguageProvider({ children }) {

    const [local, setLocal] = useState('es');
    const [work_section, setWork_section] = useState(0);
    const [skills_section, setSkills_section] = useState(0);

    const get = (value) => {
        return translations[local]?.[value] || 'lang error';
    };

    const getLocal = () => {
        return local;
    };

    const getCard = () => {
        return cards?.[local] || {};
    };

    const getSkills = () => {
        return skills?.[local] || {};
    };

    const getSections = () => {
        return Object.keys(cards?.[local] || {});
    };

    const getWorkSection = () => {
        const sections = Object.keys(cards?.[local] || {});
        return sections[work_section] ?? sections[0];
    };

    const setWorkSection = (index) => {
        setWork_section(index);
    };

    const getSkillsSection = () => {
        const sections = Object.keys(skills?.[local] || {});
        return sections[skills_section] ?? sections[0];
    };

    const setSkillsSection = (index) => {
        console.log('section set '+ index);
        
        setSkills_section(index);
    };


    return (
        <LanguageContext.Provider value={{
            get,
            getCard,
            getSkills,
            setLocal,
            getLocal,
            getSections,
            getWorkSection,
            setWorkSection,
            getSkillsSection,
            setSkillsSection,
            work_section
        }}>
            {children}
        </LanguageContext.Provider>
    );
}