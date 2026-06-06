import React, { useState } from 'react'
import SVGselector from '../SVGcomp/SVGselector';
import './ColorSelector.css'
import ColorChanger from '../Utils/ColorChanger';

const ColorSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='palette-container'>
            <div className='palette' onClick={toggleMenu}><SVGselector type={"palette"} /></div>
            <div className={`splash-wrapper ${isOpen ? 'opened' : ''}`}>
                <div className='splash-item' onClick={() => ColorChanger({ color: "purple" })} ><SVGselector size={48} type={"splash"} color="#9f7aea"/> </div>
                <div className='splash-item' onClick={() => ColorChanger({ color: "black" })}><SVGselector size={48} type={"splash"} color="#1d1d1d"/> </div>
                <div className='splash-item' onClick={() => ColorChanger({ color: "red" })} ><SVGselector size={48} type={"splash"} color="#ff0000"/> </div>
                <div className='splash-item' onClick={() => ColorChanger({ color: "yellow" })}><SVGselector size={48} type={"splash"} color="#e9da0d"/> </div>
                <div className='splash-item' onClick={() => ColorChanger({ color: "green" })}><SVGselector size={48} type={"splash"} color="#3dd80e"/> </div>
                <div className='splash-item' onClick={() => ColorChanger({ color: "cyan" })}><SVGselector size={48} type={"splash"} color="#12dbdb"/> </div>
                <div className='splash-item' onClick={() => ColorChanger({ color: "blue" })}><SVGselector size={48} type={"splash"} color="#121fdb"/> </div>
                <div className='splash-item' onClick={() => ColorChanger({ color: "pink" })}><SVGselector size={48} type={"splash"} color="#e610c2"/> </div>
            </div>
        </div>
    )
}

export default ColorSelector
