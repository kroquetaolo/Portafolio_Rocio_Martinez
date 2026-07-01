import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const SkillsImages = ({ img_src }) => {

    const [open, setOpen] = useState(false);

    return (

        <React.Fragment>
            <img
                src={`/images/${img_src[0]}`}
                onClick={() => setOpen(true)}
            />
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                controller={{ closeOnBackdropClick: true }}
                plugins={[Thumbnails]}
                carousel={{ finite: true }}
                render={img_src.length > 1 ? {} : { buttonPrev: () => null, buttonNext: () => null }}
                slides={
                    img_src.length > 1 ? (
                        img_src.map(img => ({ src: `/images/${img}` }))
                    )
                        :
                        (
                            [{ src: `/images/${img_src[0]}` }]
                        )
                }
            />
        </React.Fragment>
    )
}

export default SkillsImages
