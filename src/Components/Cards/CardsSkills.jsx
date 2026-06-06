import React from "react"
import SVGselector from "../SVGcomp/SVGselector"
import Rating from "../Utils/Rating"


const CardsSkills = ({ item, skill}) => {
    return (
        <React.Fragment>
            <div className="fullskills-cards-image-wrapper">
                <img src={`/images/${item.images[0]}`} alt="" />
                <SVGselector className="fullskills-cards-overlay" type={skill}/>
            </div>
            <div className="fullskills-cards-description">
                <p>{item.description}</p>
                <Rating value={item.proficiency} />
            </div>
        </React.Fragment>
    )
}

export default CardsSkills
