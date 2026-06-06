import { useState } from "react";
import { cards, translations } from './Translations';
import { LanguageContext } from './LanguageContext';

export function LanguageProvider({ children }) {

    const [local, setLocal] = useState('es');
    const [work_section, setWork_section] = useState(0);
    const get = (value) => {
        return translations[local]?.[value] || 'lang error';
    };

    const getLocal = () => {
        return local;
    };

    const getCard = () => {
        return cards?.[local] || {};
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
        console.log(getWorkSection());
    };

    return (
        <LanguageContext.Provider value={{
            get,
            getCard,
            setLocal,
            getLocal,
            getSections,
            getWorkSection,
            setWorkSection,
            work_section
        }}>
            {children}
        </LanguageContext.Provider>
    );
}