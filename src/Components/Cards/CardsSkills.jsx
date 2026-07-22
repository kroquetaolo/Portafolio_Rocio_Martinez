import React, { useContext } from "react"
import SVGselector from "../SVGcomp/SVGselector"
import Rating, { RatingToString } from "../Utils/Rating"
import SkillsImages from "../Skills/SkillsImages"
import { LanguageContext } from "../Language/LanguageContext"


const CardsSkills = ({ item, skill, dash }) => {

    const { get } = useContext(LanguageContext);

    const isVideo = (file) => {
        return file.toLowerCase().endsWith(".mp4");
    }

    const videoHandle = (file, autoplay) => {
        if (autoplay) {
            return <video onLoadedMetadata={(e) => { e.target.volume = 0.03; }} autoPlay loop muted playsInline controls src={`/images/${file}`}></video>
        } else {
            return <video onLoadedMetadata={(e) => { e.target.volume = 0.03; }} controls src={`/images/${file}`}></video>
        }

    }

    return (
        <React.Fragment>
            <div className="fullskills-cards-image-wrapper">
                <div className="fullskills-cards-top">
                    <div className="fullskills-cards-top-info">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                    <div className="fullskills-cards-top-proficiency">
                        <p><RatingToString level={item.proficiency} /></p>
                        <div><Rating value={item.proficiency} /></div>
                    </div>
                </div>
                {
                    item.subcategory && item.subcategory.length > 0 && (
                        <div className="fullskills-cards-subcategory">
                            {item.subcategory.map((subcat, index) => (
                                <span key={index}>{subcat}</span>
                            ))}
                        </div>
                    )
                }
                {isVideo(item.images[0][0]) ? videoHandle(item.images[0][0]) : <SkillsImages img_src={item.images[0]} />}
                <SVGselector className="fullskills-cards-image-wrapper-dashes" type="dashes" dash={dash} />
                <SVGselector className="fullskills-cards-overlay" type={skill} />
            </div>
            <div className="fullskills-cards-other-images-wrapper">
                <h2>{get("skills-featured")}</h2>
                {
                    item.images && item.images.length > 0 && (
                        <div className="fullskills-cards-other-images">
                            {item.images.map((image, index) => (
                                index !== 0 ?
                                    <React.Fragment key={image}> {
                                        isVideo(image[0]) ? videoHandle(image[0], true) : < SkillsImages img_src={image} />
                                    } </React.Fragment>
                                    : null
                            ))}
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default CardsSkills