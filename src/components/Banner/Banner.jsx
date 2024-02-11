import React from "react";
import "./Banner.scss";

function Banner({image, texte}) {
    return(
        <div className="Banner">
            <img className="Image-Banner" src={image} alt="Banner"/>
            <div className="Light-Banner"></div>
            <span className="Text-Banner">{texte}</span>
        </div>
    );
}

export default Banner;