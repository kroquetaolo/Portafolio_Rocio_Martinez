import { memo, useRef, useState } from 'react'
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import './Cards.css'
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Zoom } from 'yet-another-react-lightbox/plugins';
import { useAutoIconColor } from '../Utils/Hook';
import SVGselector from '../SVGcomp/SVGselector';

const CardsWorks = ({ info }) => {
    const [open, setOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const imgRef = useRef(null);
    const isDark = useAutoIconColor(imgRef);

    return (
        <div className="card_works">
            <div className="image-wrapper">
                {!loaded && (
                    <div className="loading-overlay">
                        <span className="loader"></span>
                    </div>
                )}

                <div className='card-work-wrapper'>
                    <img
                        key={info.images[0]}
                        ref={imgRef}
                        className='card-img'
                        style={{
                            objectPosition: info.position,
                            display: loaded ? "block" : "none"
                        }}
                        src={`/images/${info.images[0]}`}
                        alt={info.subtitle}
                        onClick={() => setOpen(true)}
                        onLoad={() => setLoaded(true)}
                    />
                    <div className='card-img-icon' style={{ color: isDark ? "white" : "black" }} onClick={() => setOpen(true)}>
                        <SVGselector size={24} type={"pointer"} />
                    </div>
                </div>
            </div>

            <div className='information_works'>
                <h2>{info.title}</h2>
                <p>{info.info}</p>
            </div>

            {(open &&

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
                    captions={{ showToggle: true }}
                    slides={
                        info.images.length > 1
                            ? info.images.map(img => ({
                                src: `/images/${img}`,
                                title: info.subtitle,
                                description: `${info.title}\n\n${info.info}`
                            }))
                            : [{
                                src: `/images/${info.images[0]}`,
                                title: info.subtitle,
                                description: `${info.title}\n\n${info.info}`
                            }]
                    }
                />
            )}

        </div>
    )
}

export default memo(CardsWorks)