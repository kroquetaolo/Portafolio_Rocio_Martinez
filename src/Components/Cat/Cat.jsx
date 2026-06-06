import React from "react";
import './Cat.css'

const Cat = () => {
    return (
        <article className="cat" role="img" aria-labelledby="alt">
            <div id="alt">Pretty cat</div>
            <div className="shadow"></div>
            <div className="tail"></div>
            <div className="body">
                <div className="leg"></div>
                <div className="leg"></div>
                <div className="paw"></div>
                <div className="paw"></div>
            </div>
            <div className="ear"></div>
            <div className="ear"></div>
            <div className="head">
                <div className="whisker"></div>
                <div className="whisker"></div>
                <div className="whisker"></div>
                <div className="whisker"></div>
                <div className="eye"></div>
                <div className="eye"></div>
                <div className="nose"></div>
            </div>
        </article>
    );
};

export default Cat;
