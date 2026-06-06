import { useContext, useRef, useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import { useInView } from 'react-intersection-observer';

import './Cards.css'
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Zoom } from 'yet-another-react-lightbox/plugins';
import SVGselector from '../SVGcomp/SVGselector';
import { useAutoIconColor } from '../Utils/Hook';
import { LanguageContext } from '../Language/LanguageContext';

const Cards = ({ info }) => {
    const [open, setOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const imgRef = useRef(null);
    const isDark = useAutoIconColor(imgRef);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const { getLocal } = useContext(LanguageContext)

    const subtitle = info[`subtitle_${getLocal()}`];
    const title = info[`title_${getLocal()}`];
    const description = info[`description_${getLocal()}`];

    return (
        <div ref={ref} className={`card ${inView ? 'card-visible' : ''}`}>
            <div className='card-wrapper'>
                {!loaded && (
                    <div className="loading-overlay">
                        <span className="loader"></span>
                    </div>
                )}
                <img
                    key={info.images[0]}
                    ref={imgRef}
                    className='card-img'
                    style={{
                        objectPosition: info.position,
                        display: loaded ? "block" : "none"
                    }}
                    src={`/images/${info.images[0]}`}
                    alt={subtitle}
                    onClick={() => setOpen(true)}
                    onLoad={() => setLoaded(true)} />
                <div className='card-img-icon' style={{ color: isDark ? "white" : "black" }} onClick={() => setOpen(true)}>
                    <SVGselector size={24} type={"pointer"} />
                </div>
            </div>
            <p className='card-subtitle'>{subtitle}</p>
            <div className='information'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                controller={{ closeOnBackdropClick: true }}
                plugins={[Captions, Zoom]}
                animation={{ zoom: 500 }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    zoomInMultiplier: 2,
                    doubleTapDelay: 300,
                    doubleClickMaxStops: 2,
                    wheelZoomDistanceFactor: 100,
                    pinchZoomDistanceFactor: 100,
                    scrollToZoom: true
                }}
                carousel={info.images.length > 1 ? { finite: false } : { finite: true }}
                render={info.images.length > 1 ? {} : { buttonPrev: () => null, buttonNext: () => null }}
                captions={{
                    showToggle: true
                }}
                slides={
                    info.images.length > 1 ? (
                        info.images.map(img => ({ src: `/images/${img}`, title: subtitle, description: `${title}\n\n${description}` }))
                    )
                        :
                        (
                            [{ src: `/images/${info.images[0]}`, title: subtitle, description: `${title}\n\n${description}` }]
                        )
                }
            />
        </div>
    )
}

export default Cards
