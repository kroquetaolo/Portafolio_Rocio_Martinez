import React, { useContext } from 'react'
import "./LangButton.css"
import { LanguageContext } from '../Language/LanguageContext';

const LangButton = () => {
    const {setLocal} = useContext(LanguageContext)

    const handleToggle = (e) => {
        const newLang = e.target.checked ? "EN" : "ES";
        setLocal(newLang.toLowerCase());
    };
    return (
        <React.Fragment>
            <div className="btn-container">
                <label className="switch btn-color-mode-switch">
                    <input
                    id="color_mode"
                    type="checkbox"
                    onChange={handleToggle}
                    />
                    <label
                        className="btn-color-mode-switch-inner"
                        data-off="ES"
                        data-on="EN"
                        htmlFor="color_mode">s
                    </label>
                </label>

            </div>
        </React.Fragment>
    )
}

export default LangButton
